// 176824911310512
console.log(1);
setTimeout(() => {
    console.log(2);
    process.nextTick(() => {
        console.log(3);
    })
    new Promise(res => {
        console.log(4);
        res();
    }).then(() => {
        console.log(5);
    })
}, 0);
process.nextTick(() => {
    console.log(6);
})
new Promise(res => {
    console.log(7);
    res();
}).then(() => {
    console.log(8);
})

setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10);
    })
    new Promise(res => {
        console.log(11);
        res();
    }).then(() => {
        console.log(12);
    })
}, 0);


function findNode(tree, name) {
    if (!tree.processed.action_traces || !tree.processed.action_traces.length) return null
    let arr = tree.processed.action_traces

    for (const item of arr) {
        if (item.inline_traces) {
            let node = this.findName(item.inline_traces, name)
            if (node) return node
        }
    }

    return null
}

function findName(tree, name) {
    let res = null
    for (let i = 0; i < tree.length; i++) {
        const item = tree[i];
        if (item.act && item.act.name === name) {
            res = item.act
            break
        }
    }
    return res
}


var treeArr = {
        "transaction_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
        "processed": {
            "id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
            "block_num": 152610010,
            "block_time": "2021-11-24T13:06:09.000",
            "producer_block_id": null,
            "receipt": { "status": "executed", "cpu_usage_us": 483, "net_usage_words": 19 },
            "elapsed": 483,
            "net_usage": 152,
            "scheduled": false,
            "action_traces": [{
                "action_ordinal": 1,
                "creator_action_ordinal": 0,
                "closest_unnotified_ancestor_action_ordinal": 0,
                "receipt": {
                    "receiver": "eosio.token",
                    "act_digest": "1592de8b56588f7825db0ececb9ac25e0a8da25f4e82cefb5e0527fc23b50012",
                    "global_sequence": "28444419418",
                    "recv_sequence": 229370938,
                    "auth_sequence": [
                        ["light.gm", 194]
                    ],
                    "code_sequence": 2,
                    "abi_sequence": 2
                },
                "receiver": "eosio.token",
                "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "light.gm", "permission": "active" }], "data": { "from": "light.gm", "to": "alcordexmain", "quantity": "2.00000000 WAX", "memo": "0.0000 FWF@farmerstoken" }, "hex_data": "0000009281dc988b309d915da54b513400c2eb0b00000000085741580000000017302e3030303020465746406661726d657273746f6b656e" },
                "context_free": false,
                "elapsed": 52,
                "console": "",
                "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                "block_num": 152610010,
                "block_time": "2021-11-24T13:06:09.000",
                "producer_block_id": null,
                "account_ram_deltas": [],
                "except": null,
                "error_code": null,
                "inline_traces": [{
                    "action_ordinal": 2,
                    "creator_action_ordinal": 1,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "light.gm",
                        "act_digest": "1592de8b56588f7825db0ececb9ac25e0a8da25f4e82cefb5e0527fc23b50012",
                        "global_sequence": "28444419419",
                        "recv_sequence": 136,
                        "auth_sequence": [
                            ["light.gm", 195]
                        ],
                        "code_sequence": 2,
                        "abi_sequence": 2
                    },
                    "receiver": "light.gm",
                    "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "light.gm", "permission": "active" }], "data": { "from": "light.gm", "to": "alcordexmain", "quantity": "2.00000000 WAX", "memo": "0.0000 FWF@farmerstoken" }, "hex_data": "0000009281dc988b309d915da54b513400c2eb0b00000000085741580000000017302e3030303020465746406661726d657273746f6b656e" },
                    "context_free": false,
                    "elapsed": 2,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": []
                }, {
                    "action_ordinal": 3,
                    "creator_action_ordinal": 1,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "alcordexmain",
                        "act_digest": "1592de8b56588f7825db0ececb9ac25e0a8da25f4e82cefb5e0527fc23b50012",
                        "global_sequence": "28444419420",
                        "recv_sequence": 77949858,
                        "auth_sequence": [
                            ["light.gm", 196]
                        ],
                        "code_sequence": 2,
                        "abi_sequence": 2
                    },
                    "receiver": "alcordexmain",
                    "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "light.gm", "permission": "active" }], "data": { "from": "light.gm", "to": "alcordexmain", "quantity": "2.00000000 WAX", "memo": "0.0000 FWF@farmerstoken" }, "hex_data": "0000009281dc988b309d915da54b513400c2eb0b00000000085741580000000017302e3030303020465746406661726d657273746f6b656e" },
                    "context_free": false,
                    "elapsed": 143,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": []
                }, {
                    "action_ordinal": 4,
                    "creator_action_ordinal": 3,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "eosio.token",
                        "act_digest": "6af46c942dca1135e2c773c766bbff3122c3b4a5c5c85358133847733834b081",
                        "global_sequence": "28444419421",
                        "recv_sequence": 229370939,
                        "auth_sequence": [
                            ["alcordexmain", 148786719]
                        ],
                        "code_sequence": 2,
                        "abi_sequence": 2
                    },
                    "receiver": "eosio.token",
                    "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "ls3yk.wam", "quantity": "1.99597186 WAX", "memo": "order match | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000908603e8078e829ce50b000000000857415800000000226f72646572206d61746368207c20444558207c20616c636f722e65786368616e6765" },
                    "context_free": false,
                    "elapsed": 24,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": [{
                        "action_ordinal": 10,
                        "creator_action_ordinal": 4,
                        "closest_unnotified_ancestor_action_ordinal": 4,
                        "receipt": {
                            "receiver": "alcordexmain",
                            "act_digest": "6af46c942dca1135e2c773c766bbff3122c3b4a5c5c85358133847733834b081",
                            "global_sequence": "28444419422",
                            "recv_sequence": 77949859,
                            "auth_sequence": [
                                ["alcordexmain", 148786720]
                            ],
                            "code_sequence": 2,
                            "abi_sequence": 2
                        },
                        "receiver": "alcordexmain",
                        "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "ls3yk.wam", "quantity": "1.99597186 WAX", "memo": "order match | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000908603e8078e829ce50b000000000857415800000000226f72646572206d61746368207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 10,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }, {
                        "action_ordinal": 11,
                        "creator_action_ordinal": 4,
                        "closest_unnotified_ancestor_action_ordinal": 4,
                        "receipt": {
                            "receiver": "ls3yk.wam",
                            "act_digest": "6af46c942dca1135e2c773c766bbff3122c3b4a5c5c85358133847733834b081",
                            "global_sequence": "28444419423",
                            "recv_sequence": 477,
                            "auth_sequence": [
                                ["alcordexmain", 148786721]
                            ],
                            "code_sequence": 2,
                            "abi_sequence": 2
                        },
                        "receiver": "ls3yk.wam",
                        "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "ls3yk.wam", "quantity": "1.99597186 WAX", "memo": "order match | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000908603e8078e829ce50b000000000857415800000000226f72646572206d61746368207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 4,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }]
                }, {
                    "action_ordinal": 5,
                    "creator_action_ordinal": 3,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "farmerstoken",
                        "act_digest": "f5942ac02835f3fb7c594f9ca22a6d0a1febc9d52eff16829185a688dc004d0d",
                        "global_sequence": "28444419424",
                        "recv_sequence": 12789137,
                        "auth_sequence": [
                            ["alcordexmain", 148786722]
                        ],
                        "code_sequence": 1,
                        "abi_sequence": 1
                    },
                    "receiver": "farmerstoken",
                    "act": { "account": "farmerstoken", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "light.gm", "quantity": "2.8637 FWF", "memo": "order match | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000009281dc988bdd6f0000000000000446574600000000226f72646572206d61746368207c20444558207c20616c636f722e65786368616e6765" },
                    "context_free": false,
                    "elapsed": 30,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": [{
                        "action_ordinal": 12,
                        "creator_action_ordinal": 5,
                        "closest_unnotified_ancestor_action_ordinal": 5,
                        "receipt": {
                            "receiver": "alcordexmain",
                            "act_digest": "f5942ac02835f3fb7c594f9ca22a6d0a1febc9d52eff16829185a688dc004d0d",
                            "global_sequence": "28444419425",
                            "recv_sequence": 77949860,
                            "auth_sequence": [
                                ["alcordexmain", 148786723]
                            ],
                            "code_sequence": 1,
                            "abi_sequence": 1
                        },
                        "receiver": "alcordexmain",
                        "act": { "account": "farmerstoken", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "light.gm", "quantity": "2.8637 FWF", "memo": "order match | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000009281dc988bdd6f0000000000000446574600000000226f72646572206d61746368207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 8,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }, {
                        "action_ordinal": 13,
                        "creator_action_ordinal": 5,
                        "closest_unnotified_ancestor_action_ordinal": 5,
                        "receipt": {
                            "receiver": "light.gm",
                            "act_digest": "f5942ac02835f3fb7c594f9ca22a6d0a1febc9d52eff16829185a688dc004d0d",
                            "global_sequence": "28444419426",
                            "recv_sequence": 137,
                            "auth_sequence": [
                                ["alcordexmain", 148786724]
                            ],
                            "code_sequence": 1,
                            "abi_sequence": 1
                        },
                        "receiver": "light.gm",
                        "act": { "account": "farmerstoken", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "light.gm", "quantity": "2.8637 FWF", "memo": "order match | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000009281dc988bdd6f0000000000000446574600000000226f72646572206d61746368207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 3,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }]
                }, {
                    "action_ordinal": 6,
                    "creator_action_ordinal": 3,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "eosio.token",
                        "act_digest": "041b4d692f95b4348c9c46664a61a685b161903a643adc5f20a754ebb37f4a76",
                        "global_sequence": "28444419427",
                        "recv_sequence": 229370940,
                        "auth_sequence": [
                            ["alcordexmain", 148786725]
                        ],
                        "code_sequence": 2,
                        "abi_sequence": 2
                    },
                    "receiver": "eosio.token",
                    "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "alcordexfund", "quantity": "0.00399994 WAX", "memo": "developer fund | DEX | alcor.exchange" }, "hex_data": "309d915da54b513490a65e5da54b51347a1a060000000000085741580000000025646576656c6f7065722066756e64207c20444558207c20616c636f722e65786368616e6765" },
                    "context_free": false,
                    "elapsed": 20,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": [{
                        "action_ordinal": 14,
                        "creator_action_ordinal": 6,
                        "closest_unnotified_ancestor_action_ordinal": 6,
                        "receipt": {
                            "receiver": "alcordexmain",
                            "act_digest": "041b4d692f95b4348c9c46664a61a685b161903a643adc5f20a754ebb37f4a76",
                            "global_sequence": "28444419428",
                            "recv_sequence": 77949861,
                            "auth_sequence": [
                                ["alcordexmain", 148786726]
                            ],
                            "code_sequence": 2,
                            "abi_sequence": 2
                        },
                        "receiver": "alcordexmain",
                        "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "alcordexfund", "quantity": "0.00399994 WAX", "memo": "developer fund | DEX | alcor.exchange" }, "hex_data": "309d915da54b513490a65e5da54b51347a1a060000000000085741580000000025646576656c6f7065722066756e64207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 8,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }, {
                        "action_ordinal": 15,
                        "creator_action_ordinal": 6,
                        "closest_unnotified_ancestor_action_ordinal": 6,
                        "receipt": {
                            "receiver": "alcordexfund",
                            "act_digest": "041b4d692f95b4348c9c46664a61a685b161903a643adc5f20a754ebb37f4a76",
                            "global_sequence": "28444419429",
                            "recv_sequence": 14399501,
                            "auth_sequence": [
                                ["alcordexmain", 148786727]
                            ],
                            "code_sequence": 2,
                            "abi_sequence": 2
                        },
                        "receiver": "alcordexfund",
                        "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "alcordexfund", "quantity": "0.00399994 WAX", "memo": "developer fund | DEX | alcor.exchange" }, "hex_data": "309d915da54b513490a65e5da54b51347a1a060000000000085741580000000025646576656c6f7065722066756e64207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 2,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }]
                }, {
                    "action_ordinal": 7,
                    "creator_action_ordinal": 3,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "farmerstoken",
                        "act_digest": "286bee8c181ff3d2daf1f3b341d0ddbc2b3ad444c19549edc5a29f7e2d2f975b",
                        "global_sequence": "28444419430",
                        "recv_sequence": 12789138,
                        "auth_sequence": [
                            ["alcordexmain", 148786728]
                        ],
                        "code_sequence": 1,
                        "abi_sequence": 1
                    },
                    "receiver": "farmerstoken",
                    "act": { "account": "farmerstoken", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "alcordexfund", "quantity": "0.0057 FWF", "memo": "developer fund | DEX | alcor.exchange" }, "hex_data": "309d915da54b513490a65e5da54b51343900000000000000044657460000000025646576656c6f7065722066756e64207c20444558207c20616c636f722e65786368616e6765" },
                    "context_free": false,
                    "elapsed": 26,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": [{
                        "action_ordinal": 16,
                        "creator_action_ordinal": 7,
                        "closest_unnotified_ancestor_action_ordinal": 7,
                        "receipt": {
                            "receiver": "alcordexmain",
                            "act_digest": "286bee8c181ff3d2daf1f3b341d0ddbc2b3ad444c19549edc5a29f7e2d2f975b",
                            "global_sequence": "28444419431",
                            "recv_sequence": 77949862,
                            "auth_sequence": [
                                ["alcordexmain", 148786729]
                            ],
                            "code_sequence": 1,
                            "abi_sequence": 1
                        },
                        "receiver": "alcordexmain",
                        "act": { "account": "farmerstoken", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "alcordexfund", "quantity": "0.0057 FWF", "memo": "developer fund | DEX | alcor.exchange" }, "hex_data": "309d915da54b513490a65e5da54b51343900000000000000044657460000000025646576656c6f7065722066756e64207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 8,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }, {
                        "action_ordinal": 17,
                        "creator_action_ordinal": 7,
                        "closest_unnotified_ancestor_action_ordinal": 7,
                        "receipt": {
                            "receiver": "alcordexfund",
                            "act_digest": "286bee8c181ff3d2daf1f3b341d0ddbc2b3ad444c19549edc5a29f7e2d2f975b",
                            "global_sequence": "28444419432",
                            "recv_sequence": 14399502,
                            "auth_sequence": [
                                ["alcordexmain", 148786730]
                            ],
                            "code_sequence": 1,
                            "abi_sequence": 1
                        },
                        "receiver": "alcordexfund",
                        "act": { "account": "farmerstoken", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "alcordexfund", "quantity": "0.0057 FWF", "memo": "developer fund | DEX | alcor.exchange" }, "hex_data": "309d915da54b513490a65e5da54b51343900000000000000044657460000000025646576656c6f7065722066756e64207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 1,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }]
                }, {
                    "action_ordinal": 8,
                    "creator_action_ordinal": 3,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "alcordexmain",
                        "act_digest": "8380e3e403fa6bc17339f75e6843bba851b6b4d58bf10599fd0f212218b567f6",
                        "global_sequence": "28444419433",
                        "recv_sequence": 77949863,
                        "auth_sequence": [
                            ["alcordexmain", 148786731]
                        ],
                        "code_sequence": 37,
                        "abi_sequence": 30
                    },
                    "receiver": "alcordexmain",
                    "act": { "account": "alcordexmain", "name": "buymatch", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "record": { "id": 130967, "market": { "id": 105, "base_token": { "sym": "8,WAX", "contract": "eosio.token" }, "quote_token": { "sym": "4,FWF", "contract": "farmerstoken" }, "min_buy": "0.50000000 WAX", "min_sell": "0.2000 FWF", "frozen": 0, "fee": 20 }, "bidder": "light.gm", "asker": "ls3yk.wam", "bidder_balance_before": "103.4882 FWF", "bid": "1.99597186 WAX", "ask": "2.8637 FWF", "unit_price": "69700000", "timestamp": 1637759169 } }, "hex_data": "97ff0100000000006900000000000000085741580000000000a6823403ea305504465746000000003015a4195f25af5980f0fa02000000000857415800000000d007000000000000044657460000000000140000009281dc988b0000908603e8078e82ca0f00000000000446574600000000829ce50b000000000857415800000000dd6f0000000000000446574600000000a0892704000000000000000000000000c1389e6100000000" },
                    "context_free": false,
                    "elapsed": 12,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": []
                }, {
                    "action_ordinal": 9,
                    "creator_action_ordinal": 3,
                    "closest_unnotified_ancestor_action_ordinal": 1,
                    "receipt": {
                        "receiver": "eosio.token",
                        "act_digest": "18d5e68e6826bbd21bb40aeee95f9838d17961217a9e944981d0f7b8492813d7",
                        "global_sequence": "28444419434",
                        "recv_sequence": 229370941,
                        "auth_sequence": [
                            ["alcordexmain", 148786732]
                        ],
                        "code_sequence": 2,
                        "abi_sequence": 2
                    },
                    "receiver": "eosio.token",
                    "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "light.gm", "quantity": "0.00002820 WAX", "memo": "refund remaining after rounding | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000009281dc988b040b000000000000085741580000000036726566756e642072656d61696e696e6720616674657220726f756e64696e67207c20444558207c20616c636f722e65786368616e6765" },
                    "context_free": false,
                    "elapsed": 27,
                    "console": "",
                    "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                    "block_num": 152610010,
                    "block_time": "2021-11-24T13:06:09.000",
                    "producer_block_id": null,
                    "account_ram_deltas": [],
                    "except": null,
                    "error_code": null,
                    "inline_traces": [{
                        "action_ordinal": 18,
                        "creator_action_ordinal": 9,
                        "closest_unnotified_ancestor_action_ordinal": 9,
                        "receipt": {
                            "receiver": "alcordexmain",
                            "act_digest": "18d5e68e6826bbd21bb40aeee95f9838d17961217a9e944981d0f7b8492813d7",
                            "global_sequence": "28444419435",
                            "recv_sequence": 77949864,
                            "auth_sequence": [
                                ["alcordexmain", 148786733]
                            ],
                            "code_sequence": 2,
                            "abi_sequence": 2
                        },
                        "receiver": "alcordexmain",
                        "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "light.gm", "quantity": "0.00002820 WAX", "memo": "refund remaining after rounding | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000009281dc988b040b000000000000085741580000000036726566756e642072656d61696e696e6720616674657220726f756e64696e67207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 8,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }, {
                        "action_ordinal": 19,
                        "creator_action_ordinal": 9,
                        "closest_unnotified_ancestor_action_ordinal": 9,
                        "receipt": {
                            "receiver": "light.gm",
                            "act_digest": "18d5e68e6826bbd21bb40aeee95f9838d17961217a9e944981d0f7b8492813d7",
                            "global_sequence": "28444419436",
                            "recv_sequence": 138,
                            "auth_sequence": [
                                ["alcordexmain", 148786734]
                            ],
                            "code_sequence": 2,
                            "abi_sequence": 2
                        },
                        "receiver": "light.gm",
                        "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "alcordexmain", "permission": "active" }], "data": { "from": "alcordexmain", "to": "light.gm", "quantity": "0.00002820 WAX", "memo": "refund remaining after rounding | DEX | alcor.exchange" }, "hex_data": "309d915da54b51340000009281dc988b040b000000000000085741580000000036726566756e642072656d61696e696e6720616674657220726f756e64696e67207c20444558207c20616c636f722e65786368616e6765" },
                        "context_free": false,
                        "elapsed": 2,
                        "console": "",
                        "trx_id": "ad8b9367afa44323d735916953979ebc284ce97b1ac17db1e343f86214df1077",
                        "block_num": 152610010,
                        "block_time": "2021-11-24T13:06:09.000",
                        "producer_block_id": null,
                        "account_ram_deltas": [],
                        "except": null,
                        "error_code": null,
                        "inline_traces": []
                    }]
                }]
            }],
            "account_ram_delta": null,
            "except": null,
            "error_code": null
        }
    }
    // 找出有个name: buymatch的 匹配数据
let treeName = this.findNode(treeArr, 'buymatch')

console.log('name----', treeName);