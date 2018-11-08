const bigNum = '0x111111111111111111111111111111111111111111111111111111111111'
const bigString = '888888888888888888888888888888888888888888888888888888888888'
const bigData = '0x4949494949494949'

export const testPrivate = '0x432a86ab8765d82415a803e29864dcfc1ed93dac949abf6f95a583179f27e4bb'
export const testAddr = 'Lemo36BQKCBZ8Z7B7N4G4N4SNGBT24ZZSJQD24D'

export const lemoBase = {
    address: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
    balance: '0x52b7d2dcc80cd4000000000',
    codeHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    records: {
        1: {
            height: '1',
            version: '3',
        },
    },
    root: '0x0000000000000000000000000000000000000000000000000000000000000000',
}
export const formatedLemoBase = {
    address: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
    balance: '1599999999999999999999999900',
    codeHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    records: {
        BalanceLog: {
            height: '1',
            version: '1',
        },
    },
    root: '0x0000000000000000000000000000000000000000000000000000000000000000',
}

// empty tx
export const testEmptyTx = {
    txConfig: {
        expirationTime: 1544584596,
    },
    rlp: '0xed9400000000000000000000000000000000000000008084b2d05e00831e84808080845c107d9480830200018080',
    hash: '0x6648a4e6c41458a3e6dc62eb380892ae966ec4b62b27fa8399780f1a99dedb4e',
    rlpAfterSign:
        '0xf86d9400000000000000000000000000000000000000008084b2d05e00831e84808080845c107d948083020001a00425a02d5f230dbc9ea2325870de84f17bb802c2a9b7e4ec1c27874d6970fa7ea044cb0c2538e32de45980a7bc8f97805bb1bb7237b28558ae1945acce64c29fd4',
    hashAfterSign: '0x1708c423ba606b00ff14551f6ce2d205e7f710e97b9ead972cd5c8f686558c50',
}

// normal tx
export const testTx = {
    txConfig: {
        chainId: 200,
        to: '0x000000000000000000000001',
        toName: 'aa',
        gasPrice: 2,
        gasLimit: 100,
        amount: 1,
        data: 12,
        expirationTime: 1544584596,
        message: 'aaa',
    },
    rlp: '0xeb9400000000000000000000000000000000000000018261610264010c845c107d9483616161830200c88080',
    hash: '0xa3cddd511dd5ca88b3f724e82e469d828cdc6dc6bb436e9e40a7ceb8cac94bdd',
    rlpAfterSign:
        '0xf86b9400000000000000000000000000000000000000018261610264010c845c107d9483616161830300c8a08c0499083cb3d27bead4f21994aeebf8e75fa11df6bfe01c71cad583fc9a3c70a0778a437607d072540719a866adb630001fabbfb6b032d1a8dfbffac7daed8f02',
    hashAfterSign: '0xde6f000340bded2b5c581e72698154615da2c24ee599b3848c3cedba14d9f144',
}

// big tx
export const testBigTx = {
    txConfig: {
        chainId: 200,
        to: '0x1000000000000000000000000000000000000000',
        toName: bigString,
        gasPrice: bigNum,
        gasLimit: 100,
        amount: bigNum,
        data: bigData,
        expirationTime: 1544584596,
        message: bigString,
    },
    rlp:
        '0xf8e4941000000000000000000000000000000000000000b83c3838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838389e111111111111111111111111111111111111111111111111111111111111649e111111111111111111111111111111111111111111111111111111111111884949494949494949845c107d94b83c383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838830200c88080',
    hash: '0x3ca241c27e83d4a3f963870c9f85f28aea38ccaf54038d7807e49bd3326da4ab',
    rlpAfterSign:
        '0xf90124941000000000000000000000000000000000000000b83c3838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838389e111111111111111111111111111111111111111111111111111111111111649e111111111111111111111111111111111111111111111111111111111111884949494949494949845c107d94b83c383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838830300c8a0acba6ce994874d7b856d663a7f1d04bc7bf65278d33afb0a7fd8da69f626292aa001e6badf976c360673b71c54ff363bbcb521ae545fec47cb0bf83eb4c83332b6',
    hashAfterSign: '0xa53514e7207eaec136fb36879c19a0b5ff5ab2e4288666e17f9adf91cecbf723',
}

const widthLemoAddrTestBigTx = {
    txConfig: {
        chainId: 200,
        to: testAddr,
        toName: bigString,
        gasPrice: bigNum,
        gasLimit: 100,
        amount: bigNum,
        data: bigData,
        expirationTime: 1544584596,
        message: bigString,
    },
    rlp:
        '0xf8e4941000000000000000000000000000000000000000b83c3838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838389e111111111111111111111111111111111111111111111111111111111111649e111111111111111111111111111111111111111111111111111111111111884949494949494949845c107d94b83c383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838830200c88080',
    hash: '0x3ca241c27e83d4a3f963870c9f85f28aea38ccaf54038d7807e49bd3326da4ab',
    rlpAfterSign:
        '0xf90124941000000000000000000000000000000000000000b83c3838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838389e111111111111111111111111111111111111111111111111111111111111649e111111111111111111111111111111111111111111111111111111111111884949494949494949845c107d94b83c383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838383838830300c8a0acba6ce994874d7b856d663a7f1d04bc7bf65278d33afb0a7fd8da69f626292aa001e6badf976c360673b71c54ff363bbcb521ae545fec47cb0bf83eb4c83332b6',
    hashAfterSign: '0x066e5f32ceb2c5330fb5e2ec6a2abe9f7a5fc34c07aca7dc1bf859acc1410263',
}

//  currentBlock
export const currentBlock = {
    header: {
        parentHash: '0x5f7a532c1418114420c072df0d45ab8e44b5f869f116ef8ae431027885687b2b',
        miner: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
        versionRoot: '0x12378f27b0b509f8c40d9bb9e2123ca3a97f859cfa1a55d9bbe058ba0a02c055',
        transactionRoot: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        changeLogRoot: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        eventRoot: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        logsBloom:
            '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        height: '25',
        gasLimit: '102466556',
        gasUsed: '0',
        timestamp: '1541570395',
        signData:
            '0x70a6bb720dfc784039cd27d7a72e8918ea6bd16af43da9f04e36fba65e6c8a494a5873f98e9764ed87dd9fd36a547599a56d2369e6509d922430dce4096e99a701',
        deputyRoot: '0x',
        extraData: '0x',
        hash: '0x7bface2fcef509823b029577a9251edb0e16a4019856722f8946da25b53321b1',
    },
    transactions: null,
    changeLogs: null,
    events: null,
    confirms: null,
    deputyNodes: null,
}

export const txsBlock = {
    header: {
        parentHash: '0x425f4ca99da879aa97bd6feaef0d491096ff3437934a139f423fecf06f9fd5ab',
        miner: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
        versionRoot: '0x8117e9b6e78c6182a504aee2141e44dccd93fa0e8a0defbf77237b3c7fc79536',
        transactionRoot: '0xca653e881c7d5875c686a2eac01b77461438a8e718b7e30302b3ef59fa61a822',
        changeLogRoot: '0x28f0c4c240375ff1c4cd4e8d6a47a351df4f2aca7447d7c836b15e7808383fe2',
        eventRoot: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        logsBloom:
            '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        height: '1',
        gasLimit: '104897462',
        gasUsed: '21000',
        timestamp: '1541560112',
        signData:
            '0xfa04280a4c2770be42a5b080588aece59d1bb63d562e5406e4604b67e3358d1b5748040d5b6de81b90be53e858a4b10f14f00a9747369340beb84ed265da2ba601',
        deputyRoot: '0x',
        extraData: '0x',
        hash: '0x2eee5835c7f5f1ec12551d5863af6f4ce3a119fc6afecae83e3fdfcb2752d004',
    },
    transactions: [
        {
            to: 'Lemo83JW7TBPA7P2P6AR9ZC2WCQJYRNHZ4NJD4CY',
            toName: '',
            gasPrice: '3000000000',
            gasLimit: '2000000',
            amount: '100',
            data: '0x',
            expirationTime: '1541567301',
            message: '',
            v: '0x20001',
            r: '0x8498f3bc6ca70b50dbb222af81c80cb06ce3b2686cb1104d94de8f96ed807048',
            s: '0x740bd5921c1a8d8499fc76531a370574aef04886903fd432e1492f7adb2a3cc',
            hash: '0xca653e881c7d5875c686a2eac01b77461438a8e718b7e30302b3ef59fa61a822',
        },
    ],
    changeLogs: [
        {
            type: 'BalanceLog',
            address: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
            version: '2',
            newValue: '0x8c052b7d2dcc8093e1eb610f9c',
            extra: '',
        },
        {
            type: 'BalanceLog',
            address: 'Lemo83JW7TBPA7P2P6AR9ZC2WCQJYRNHZ4NJD4CY',
            version: '1',
            newValue: '0x64',
            extra: '',
        },
        {
            type: 'BalanceLog',
            address: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
            version: '3',
            newValue: '0x8c052b7d2dcc80cd2e3fffff9c',
            extra: '',
        },
    ],
    events: [],
    confirms: [],
    deputyNodes: [],
}
export const oneChangeLogsBlock = {
    header: {
        parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        miner: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
        versionRoot: '0x1e78c4779248d3d8d3cd9b77bf7b67b4c759ec87d45d52a3e79c928290773f4c',
        transactionRoot: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        changeLogRoot: '0x93273cebb4f0728991811d5d7c57ae8f88a83524eedb0af48b3061ed2e8017b8',
        eventRoot: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        logsBloom:
            '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        height: '0',
        gasLimit: '105000000',
        gasUsed: '0',
        timestamp: '1535630400',
        signData: '0x',
        deputyRoot: '0xd448943c5cf120118a5b2337b661ff1bc578d6bd89400287fbb82de62ae13933',
        extraData: '0x',
        hash: '0x425f4ca99da879aa97bd6feaef0d491096ff3437934a139f423fecf06f9fd5ab',
    },
    transactions: [],
    changeLogs: [
        {
            type: 'BalanceLog',
            address: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
            version: '1',
            newValue: '0x8c052b7d2dcc80cd2e40000000',
            extra: '',
        },
    ],
    events: [],
    confirms: [],
    deputyNodes: [
        {
            lemoBase: 'Lemo83GN72GYH2NZ8BA729Z9TCT7KQ5FC3CR6DJG',
            nodeID:
                '0x5e3600755f9b512a65603b38e30885c98cbac70259c3235c9b3f42ee563b480edea351ba0ff5748a638fe0aeff5d845bf37a3b437831871b48fd32f33cd9a3c0',
            ip: '127.0.0.1',
            port: '7001',
            rank: '0',
            votes: '50000',
        },
    ],
}

export const testTxs = [testEmptyTx, testTx, testBigTx]
export const withLemoAddrTestTxs = [testEmptyTx, testTx, widthLemoAddrTestBigTx]
export default {
    testPrivate,
    testAddr,
    lemoBase,
    testEmptyTx,
    testTx,
    testBigTx,
    testTxs,
}
