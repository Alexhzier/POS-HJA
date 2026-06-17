import { spawn } from 'node:child_process'

const devUrl = 'http://127.0.0.1:5173'
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const electronCommand = process.platform === 'win32' ? 'electron.cmd' : 'electron'

const vite = spawn(npmCommand, ['run', 'dev', '--', '--host', '127.0.0.1'], {
  stdio: 'inherit',
  shell: false,
})

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(devUrl)
      if (response.ok) return
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }

  throw new Error(`Timed out waiting for ${devUrl}`)
}

try {
  await waitForServer()

  const electron = spawn(electronCommand, ['.'], {
    env: {
      ...process.env,
      POS_HJA_DEV_SERVER_URL: devUrl,
    },
    stdio: 'inherit',
    shell: false,
  })

  electron.on('exit', (code) => {
    vite.kill()
    process.exit(code ?? 0)
  })
} catch (error) {
  vite.kill()
  console.error(error)
  process.exit(1)
}
