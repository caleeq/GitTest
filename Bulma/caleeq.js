const App = {
    data() {
        return {
            item: {
                requestId: '',
                rbo: '',
                itemCode: '',
                glid: '',
                dataset: '',
                requstType: '',
                testOrder: '',
            },
            pageSize: 10,
            pageNow: 1,
            search: '',
            display: 'none',
            requests: [
                ['AR0001', 'GAP', 'TEST1', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0002', 'GAP', 'TEST2', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0003', 'GAP', 'TEST3', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0004', 'GAP', 'TEST4', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0005', 'GAP', 'TEST5', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0006', 'GAP', 'TEST6', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0007', 'GAP', 'TEST7', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0008', 'GAP', 'TEST8', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0009', 'GAP', 'TEST9', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0010', 'GAP', 'TEST10', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0011', 'GAP', 'TEST11', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0012', 'GAP', 'TEST12', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0001', 'GAP', 'TEST1', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0002', 'GAP', 'TEST2', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0003', 'GAP', 'TEST3', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0004', 'GAP', 'TEST4', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0005', 'GAP', 'TEST5', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0006', 'GAP', 'TEST6', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0007', 'GAP', 'TEST7', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0008', 'GAP', 'TEST8', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0009', 'GAP', 'TEST9', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0010', 'GAP', 'TEST10', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0011', 'GAP', 'TEST11', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0012', 'GAP', 'TEST12', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0001', 'GAP', 'TEST1', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0002', 'GAP', 'TEST2', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0003', 'GAP', 'TEST3', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0004', 'GAP', 'TEST4', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0005', 'GAP', 'TEST5', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0006', 'GAP', 'TEST6', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0007', 'GAP', 'TEST7', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0008', 'GAP', 'TEST8', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0009', 'GAP', 'TEST9', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0010', 'GAP', 'TEST10', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0011', 'GAP', 'TEST11', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0012', 'GAP', 'TEST12', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0001', 'GAP', 'TEST1', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0002', 'GAP', 'TEST2', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0003', 'GAP', 'TEST3', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0004', 'GAP', 'TEST4', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0005', 'GAP', 'TEST5', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0006', 'GAP', 'TEST6', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0007', 'GAP', 'TEST7', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0008', 'GAP', 'TEST8', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0009', 'GAP', 'TEST9', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0010', 'GAP', 'TEST10', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0011', 'GAP', 'TEST11', '123456-78-9', 'DW0001', 'New Item', 'KK7HB'],
                ['AR0012', 'GAP', 'TEST12', '123456-78-9', 'DW0001', 'New Item', 'KK7HB']
            ]
        }
    },
    computed: {
        result() {
            if (this.search == '') {
                return this.requests
            } else {
                return this.requests.filter(foo => foo.some(ele => ele.toUpperCase().includes(this.search.toUpperCase())))
            }
        },
        resultCount() {
            return this.result.length
        },
        resultByPage() {
            let pageSize = this.pageSize
            let pageNow = this.pageNow
            let result = this.result
            let resultCount = this.resultCount
            let begin = (pageNow - 1) * pageSize
            let end = pageNow * pageSize > resultCount ? resultCount : pageNow * pageSize
            return result.slice(begin, end)
        },
        pageCount() {
            let mod = this.resultCount % this.pageSize
            return Math.floor(this.resultCount / this.pageSize) + (mod ? 1 : 0)
        },
        pageArray() {
            let arr = []
            for (let i = 1; i <= this.pageCount; i++) {
                arr.push(i == this.pageNow)
            }
            return arr
        },
        checkBox() {
            let cbx = []
            for (let j = 1; j <= this.resultCount; j++) {
                cbx.push(false)
            }
            return cbx
        },
        checkAll() {
            let all = []
            for (let i = 1; i <= this.pageCount; i++) {
                all.push(true)
            }
            return all[this.pageNow - 1]
        }
    },
    methods: {
        toPage(page) {
            if (page >= 1 && page <= this.pageCount) {
                return this.pageNow = page
            }
        },
        reset() {
            this.item.requestId = ""
            this.item.rbo = ""
            this.item.itemCode = ""
            this.item.glid = ""
            this.item.dataset = ""
            this.item.requstType = ""
            this.item.testOrder = ""
        },
        displayPanel() {
            return this.display = (this.display == 'none') ? 'block' : 'none'
        },
        clearSearch() {
            return this.search = ""
        },
        additem() {
            let item = this.item
            let newRecord = [item.requestId, item.rbo, item.itemCode, item.glid, item.dataset, item.requstType, item.testOrder]
            this.requests.push(newRecord)
        },
    }
}

Vue.createApp(App).mount('#app')