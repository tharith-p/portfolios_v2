
module.exports = {
    apps: [
        {
            name: 'tharith_portfolio',
            port: '3005',
            exec_mode: 'cluster',
            instances: '1',
            script: 'bun',
            watch: true,
            args: 'run dev',
            env: {}
        }
    ]
}