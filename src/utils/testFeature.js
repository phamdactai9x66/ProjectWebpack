import moment from 'moment'
export const test1 = () => {
    window.__data = { hello: 123 }
    return moment()
}