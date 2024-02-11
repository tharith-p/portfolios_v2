module.exports = {
    apps: [
        {
            name: 'tharith_portfolio',
            port: '3031',
            exec_mode: 'cluster',
            instances: '2',
            script: 'npm',
            args: "run dev",
            env: {}
        }
    ]
}