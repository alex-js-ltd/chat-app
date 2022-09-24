/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

import { AppProviders } from './context/index'

const Wrapper = () => (
    <AppProviders>
        <App />
    </AppProviders>
)

AppRegistry.registerComponent(appName, () => Wrapper)
