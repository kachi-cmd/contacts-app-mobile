import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env'

const devEnvVariable = {
    BACKEND_URL: DEV_BACKEND_URL,
}

const prodvEnvVariable = {
    BACKEND_URL: PROD_BACKEND_URL,
}

export default __DEV__? devEnvVariable : prodvEnvVariable