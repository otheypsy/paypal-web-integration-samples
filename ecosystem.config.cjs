module.exports = {
    apps: [{
        name: 'paypal-web-integration-samples',
        script: 'yarn',
        args: 'start',
        interpreter: '/bin/bash',
        exec_mode: 'cluster_mode',
        instances: 1,
        env: {
            NODE_ENV: "development"
        }
    }]
}
