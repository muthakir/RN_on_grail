module.exports = {
    react : {
        debug : true,

        lifecycle : {
            /**
             * Decide if you want to see Update Cycles as well
             */
            includeUpdate: false,

            /**
             * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
             */
            instrument: (filename) => {
                return false;
            }
        },

        input : {
            /**
             * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
             * True = Will be instrumented
             */
            instrument: (filename) => {
                return true;
            }
        }
    },
    android : {
        // Those configs are copied 1:1
        config : `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId 'a19cd4be-a0ba-4cc2-8cc7-0fcb32c15cd8'
                        beaconUrl 'https://bf72198kwm.bf-dev.dynatracelabs.com/mbeacon'
                    }
                    userOptIn false
                    agentBehavior.startupLoadBalancing true
                    agentBehavior.startupWithGrailEnabled true
                }
            }
        }
        `
    },
    ios : {
        // Those configs are copied 1:1
        config : `
        <key>DTXApplicationID</key>
        <string>a19cd4be-a0ba-4cc2-8cc7-0fcb32c15cd8</string>
        <key>DTXBeaconURL</key>
        <string>https://bf72198kwm.bf-dev.dynatracelabs.com/mbeacon</string>
        <key>DTXLogLevel</key>
        <string>ALL</string>
        <key>DTXUserOptIn</key>
        <false/>
        <key>DTXStartupLoadBalancing</key>
        <true/>
        <key>DTXStartupWithGrailEnabled</key>
        <true/>
        `
    }
}
