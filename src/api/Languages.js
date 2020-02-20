import axios from 'axios'

const language_resource = axios.get('http://portal.greenmilesoftware.com/get_resources_since')

export default language_resource