import { defineDocument } from '../schema.js';

export const neosurfTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "neosurf",
  "blocks": [
    {
      "id": "document-tree",
      "type": "tree",
      "root": {
        "type": "element",
        "tag": "fragment",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "crumbs"
            },
            "children": [
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "href": "/"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.doclink.0001",
                    "value": "Home"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "sep"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "/"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "href": "/payment-methods"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.doclink.0002",
                    "value": "Payment Methods"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "sep"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.div.0003",
                "value": "Neosurf"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "h1",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.h1.0004",
                "value": "Neosurf"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "lead"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0005",
                "value": "Neosurf is a prepaid voucher. Customers buy a voucher with cash or online, then pay with its code, so they can shop online without a bank account or card. It is popular for digital goods, gaming, software and entertainment."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "overview"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.overview.0006",
                "value": "What Neosurf is"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0007",
                "value": "A Neosurf voucher is a prepaid payment instrument. Each voucher carries a unique code, and sometimes a PIN, and is issued in fixed denominations such as €10, €20 and €50. Once purchased, the voucher can be used straight away for online transactions. Paysecure's Neosurf suite lets you run it in both directions:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.th.0008",
                                "value": "Direction"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.th.0009",
                                "value": "What it does"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0010",
                                    "value": "PayIn"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0011",
                                "value": "The customer pays you with a Neosurf voucher code, or a MyNeosurf account in supported regions."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0012",
                                    "value": "PayOut"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0013",
                                "value": "You disburse funds to a customer's MyNeosurf account, for refunds, rewards or withdrawals."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout info"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "ico"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "svg",
                    "props": {
                      "viewBox": "0 0 24 24",
                      "fill": "none",
                      "stroke": "currentColor",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round",
                      "width": "16",
                      "height": "16",
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M4 22v-7"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0014",
                        "value": "Prepaid and anonymous."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0015",
                    "value": " Funds are preloaded on the voucher, so no banking details are shared. Completion is asynchronous: rely on the webhook, not the redirect, to confirm a payment."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "concepts"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.concepts.0016",
                "value": "Vouchers and MyNeosurf accounts"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {
              "className": "list"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0017",
                        "value": "Neosurf voucher:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0018",
                    "value": " a prepaid instrument with a unique 10-digit code, sometimes also a PIN, issued in fixed denominations such as €10, €20 and €50. It can be used immediately after purchase, and it is partially usable, so any remaining balance stays valid until it is spent or expires."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0019",
                        "value": "MyNeosurf account:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0020",
                    "value": " an online wallet linked to the customer's registered email. Customers redeem vouchers into the account, store balances and spend online. A MyNeosurf account is mandatory for receiving payouts."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.b.0021",
                    "value": "Refund versus payout."
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0022",
                "value": " A refund is always tied to the original PayIn and returns funds to the same voucher or MyNeosurf account. A payout is a standalone transfer to a MyNeosurf account and cannot be directed to a voucher."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "buy"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.buy.0023",
                "value": "Where customers buy a voucher"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0024",
                "value": "Neosurf vouchers are sold both online and at physical retail outlets. Availability varies by region; the table below is a general guide."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.th.0025",
                                "value": "Region"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.th.0026",
                                "value": "Where to buy"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0027",
                                    "value": "Western and Central Europe"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0028",
                                "value": "France, Germany, United Kingdom, Italy, Spain, Belgium, Netherlands, Luxembourg, Switzerland, Austria, Portugal, Ireland, Denmark, Sweden, Norway, Finland. Convenience stores, newsagents, supermarkets and authorised online resellers."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0029",
                                    "value": "Eastern Europe"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0030",
                                "value": "Poland, Czech Republic, Hungary, Romania and others. Local retail outlets and specialised online vendors."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0031",
                                    "value": "North America"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0032",
                                "value": "United States and Canada. Select online vendors and select physical outlets; availability may be limited."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0033",
                                    "value": "Asia"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0034",
                                "value": "Singapore, Malaysia, Indonesia, Thailand. Authorised e-voucher platforms online."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0035",
                                    "value": "Africa"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0036",
                                "value": "South Africa, Morocco, Tunisia. Select online platforms and local authorised vendors."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "b",
                                "props": {
                                  "style": {
                                    "color": "var(--ink)"
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.b.0037",
                                    "value": "Oceania"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0038",
                                "value": "Australia and New Zealand. Mainly via online resellers; check local availability."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {
              "className": "sec-note"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0039",
                "value": "For the current list of regions and authorised vendors, refer to the official Neosurf website or contact Neosurf support."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "payin"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.payin.0040",
                "value": "Collecting payments (PayIn)"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0041",
                "value": "A PayIn lets you collect from a customer with a Neosurf voucher. You initiate the purchase, Paysecure returns a checkout URL, and the customer completes the payment on the Neosurf page."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {
              "className": "list"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0042",
                        "value": "Customer selects Neosurf:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0043",
                    "value": " on your payment page, the customer chooses Neosurf as their method."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0044",
                        "value": "Initiate the purchase:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0045",
                    "value": " you send a PayIn to Paysecure with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.code.0046",
                        "value": "paymentMethod"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0047",
                    "value": " set to "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.code.0048",
                        "value": "NEOSURF"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0049",
                    "value": ", the amount to collect and the customer details."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0050",
                        "value": "Redirect to Neosurf:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0051",
                    "value": " Paysecure returns a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.code.0052",
                        "value": "checkout_url"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0053",
                    "value": ". Redirect the customer there to enter their 10-digit voucher code, or pay via a MyNeosurf account in supported regions."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0054",
                        "value": "Voucher validation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0055",
                    "value": " Neosurf checks the voucher's validity and available balance. If valid, the billing amount is debited from the voucher."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0056",
                        "value": "Confirm completion:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0057",
                    "value": " a webhook confirms the transaction, and your system can finalise the order."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0058",
                "value": "Field-level request and response shapes are in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-neosurf#payin"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.doclink.0059",
                    "value": "Neosurf API reference"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "payin-flow"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.payin-flow.0060",
                "value": "PayIn flow, step by step"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0061",
                    "value": "1"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0062",
                        "value": "Customer checkout"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0063",
                        "value": "The customer adds items to the cart and selects Neosurf. Your backend calls the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0064",
                            "value": "/v1/purchases"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0065",
                        "value": " API with "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0066",
                            "value": "paymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0067",
                        "value": " set to "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0068",
                            "value": "NEOSURF"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0069",
                        "value": ", the customer details (email, country and so on) and the purchase details (currency, amount, products)."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0070",
                    "value": "2"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0071",
                        "value": "API response"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0072",
                        "value": "Paysecure returns a "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0073",
                            "value": "purchaseId"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0074",
                        "value": " for your records and a "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0075",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0076",
                        "value": " for the hosted Neosurf page. The purchase starts in a pending state while the customer pays."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0077",
                    "value": "3"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0078",
                        "value": "Redirect to checkout"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0079",
                        "value": "Redirect the customer to the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0080",
                            "value": "checkout_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0081",
                        "value": ". On the hosted page they choose the voucher option and enter their 10-digit code (sometimes with a PIN), or the MyNeosurf option and log in with their registered email to authorise the payment."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0082",
                    "value": "4"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0083",
                        "value": "Voucher validation"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0084",
                        "value": "Neosurf checks that the code or login is authentic, that the balance is sufficient and that the voucher has not expired. If it is valid, the balance is debited instantly."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0085",
                    "value": "5"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0086",
                        "value": "Payment confirmation"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0087",
                        "value": "The customer sees a confirmation screen. Neosurf returns the result to Paysecure, which updates the transaction and sends a webhook: "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0088",
                            "value": "purchase.paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0089",
                        "value": " on success, "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0090",
                            "value": "purchase.error"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0091",
                        "value": " for an invalid or expired code or insufficient funds, or "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0092",
                            "value": "purchase.cancelled"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0093",
                        "value": " if the customer abandons."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0094",
                    "value": "6"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0095",
                        "value": "Merchant update"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0096",
                        "value": "Your backend receives the webhook ("
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0097",
                            "value": "purchaseId"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0098",
                        "value": ", status, amount) and updates the order. The customer is returned to your "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0099",
                            "value": "success_redirect"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0100",
                        "value": " or "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0101",
                            "value": "failure_redirect"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0102",
                        "value": " page."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "figure",
            "props": {
              "className": "shot"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "imgs"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "video",
                    "props": {
                      "controls": true,
                      "preload": "metadata",
                      "playsInline": true,
                      "style": {
                        "width": "100%",
                        "display": "block",
                        "border": "1px solid var(--border)",
                        "borderRadius": "10px",
                        "background": "#fff",
                        "boxShadow": "0 2px 10px rgba(15,23,42,.05)"
                      }
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "source",
                        "props": {
                          "src": "/assets/neosurf-video-flow.mp4",
                          "type": "video/mp4"
                        },
                        "children": []
                      },
                      {
                        "type": "text",
                        "id": "neosurf.video.0103",
                        "value": "Your browser does not support the video tag."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.figcaption.0104",
                    "value": "Figure 1 · Neosurf payment flow"
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "refunds"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.refunds.0105",
                "value": "Refunds"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0106",
                "value": "A refund always returns funds to the original source used for the PayIn. It cannot be redirected to a different voucher or email. You call the refund endpoint with the original "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.code.0107",
                    "value": "purchaseId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0108",
                "value": "; Paysecure checks that the transaction is refundable and that the amount is within the remaining refundable balance, then processes it."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {
              "className": "list"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0109",
                        "value": "Paid by voucher:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0110",
                    "value": " the refund is credited back to the same voucher code, and the customer can reuse the voucher until the balance is depleted or the voucher expires."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0111",
                        "value": "Paid by MyNeosurf:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0112",
                    "value": " the refund is credited directly to the same MyNeosurf account, by email."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0113",
                "value": "Paysecure sends a webhook when the refund settles: "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.code.0114",
                    "value": "refund.paid"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0115",
                "value": " on success or "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.code.0116",
                    "value": "refund.error"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0117",
                "value": " on failure. Your backend then updates the customer's order or account. Field-level detail is in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-neosurf#refund"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.doclink.0118",
                    "value": "Neosurf API reference"
                  }
                ]
              },
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout warn"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "ico"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "svg",
                    "props": {
                      "viewBox": "0 0 24 24",
                      "fill": "none",
                      "stroke": "currentColor",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round",
                      "width": "16",
                      "height": "16",
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M12 9v4M12 17h.01"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0119",
                        "value": "Expired or depleted vouchers may not accept a refund."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0120",
                    "value": " When the original voucher can no longer be credited, fall back to a payout via the customer's MyNeosurf account."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "payout"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.payout.0121",
                "value": "Sending payouts (PayOut)"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0122",
                "value": "A PayOut disburses funds to a customer's MyNeosurf account, for refunds, rewards or other disbursements. You initiate the payout with "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.code.0123",
                    "value": "payoutMethod"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0124",
                "value": " set to "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.code.0125",
                    "value": "PAYOUT-NEOSURF"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0126",
                "value": ", the recipient details and the amount, and Paysecure sends a webhook when the payout completes."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout warn"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "ico"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "svg",
                    "props": {
                      "viewBox": "0 0 24 24",
                      "fill": "none",
                      "stroke": "currentColor",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round",
                      "width": "16",
                      "height": "16",
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M12 9v4M12 17h.01"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0127",
                        "value": "Fund your payout float."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0128",
                    "value": " Payouts draw on your Neosurf balance. Check the balance before you disburse, and note that payouts above your configured threshold go through manual review in the dashboard."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "payout-flow"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.payout-flow.0129",
                "value": "PayOut flow, step by step"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0130",
                    "value": "1"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0131",
                        "value": "Initiate the payout"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0132",
                        "value": "Call the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0133",
                            "value": "/v1/payout/"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0134",
                        "value": " API with "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0135",
                            "value": "payoutMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0136",
                        "value": " set to "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.code.0137",
                            "value": "PAYOUT-NEOSURF"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "neosurf.p.0138",
                        "value": ", the recipient's MyNeosurf registered email, and the amount and currency."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0139",
                    "value": "2"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0140",
                        "value": "Paysecure validation"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0141",
                        "value": "Paysecure checks that you hold sufficient balance and that the MyNeosurf account for that email exists and is valid."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0142",
                    "value": "3"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0143",
                        "value": "Transfer processing"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0144",
                        "value": "Funds are deducted from your Neosurf balance and sent directly to the customer's MyNeosurf account."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0145",
                    "value": "4"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0146",
                        "value": "Customer notification"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0147",
                        "value": "Neosurf emails or notifies the customer that funds have been received, and their MyNeosurf balance is updated."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "step"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-n"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.div.0148",
                    "value": "5"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "step-b"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h3.0149",
                        "value": "Merchant confirmation"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0150",
                        "value": "Paysecure sends a webhook with the payout status: success when the amount is credited, or an error for an invalid email, insufficient balance or a technical fault. Your backend updates the customer's profile or account."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout info"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "ico"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "svg",
                    "props": {
                      "viewBox": "0 0 24 24",
                      "fill": "none",
                      "stroke": "currentColor",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round",
                      "width": "16",
                      "height": "16",
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "circle",
                        "props": {
                          "cx": "12",
                          "cy": "12",
                          "r": "10"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M12 16v-4M12 8h.01"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0151",
                        "value": "MyNeosurf accounts only."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0152",
                    "value": " Payouts can only be sent to a MyNeosurf account (by email), never to a voucher code."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "benefits"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.benefits.0153",
                "value": "Why accept Neosurf"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0154",
                "value": "Adding Neosurf broadens who can pay you and where you can sell:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {
              "className": "list"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0155",
                        "value": "Broader reach:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0156",
                    "value": " serve customers without bank accounts or cards, including regions where card penetration is low."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0157",
                        "value": "Reduced fraud:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0158",
                    "value": " funds are preloaded on the voucher, so chargeback and fraud exposure is lower."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0159",
                        "value": "Higher conversion:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0160",
                    "value": " a simple, fast option can cut cart abandonment in digital and gaming markets."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0161",
                        "value": "Customer privacy:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0162",
                    "value": " vouchers support anonymous payment for users who care about data privacy."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0163",
                        "value": "Global availability:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.li.0164",
                    "value": " a single method supports sales across multiple regions."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "edge-cases"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.edge-cases.0165",
                "value": "Edge cases"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0166",
                "value": "Across PayIn, refund and payout flows, the common failure scenarios and the status they resolve to are:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "tbl-wrap"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "table",
                "props": {
                  "className": "tbl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "tbody",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.th.0167",
                                "value": "Scenario"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.th.0168",
                                "value": "Result"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0169",
                                "value": "Voucher invalid or expired at PayIn"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.code.0170",
                                    "value": "purchase.error"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0171",
                                "value": "Voucher balance insufficient"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0172",
                                "value": "Declined at validation ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.code.0173",
                                    "value": "purchase.error"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ")"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0174",
                                "value": "Customer abandons during PayIn"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.code.0175",
                                    "value": "purchase.cancelled"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0176",
                                "value": "Refund blocked (voucher expired or depleted)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.code.0177",
                                    "value": "refund.error"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "neosurf.td.0178",
                                "value": "Failed payout (invalid or unknown MyNeosurf email)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "neosurf.code.0179",
                                    "value": "payout.error"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "testing"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.testing.0180",
                "value": "Testing and going live"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0181",
                "value": "Neosurf cannot be exercised in the sandbox; only cards can. Validate Neosurf flows in live with small amounts once your account manager has enabled the method and currency for your brand. See "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/test-apm-simulator"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "neosurf.doclink.0182",
                    "value": "Testing APMs"
                  }
                ]
              },
              {
                "type": "text",
                "id": "neosurf.p.0183",
                "value": " for what can and cannot be tested."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout success"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "span",
                "props": {
                  "className": "ico"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "svg",
                    "props": {
                      "viewBox": "0 0 24 24",
                      "fill": "none",
                      "stroke": "currentColor",
                      "strokeWidth": "1.8",
                      "strokeLinecap": "round",
                      "strokeLinejoin": "round",
                      "width": "16",
                      "height": "16",
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M20 6L9 17l-5-5"
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "p",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.b.0184",
                        "value": "Before you go live:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0185",
                    "value": " confirm Neosurf and your currency are enabled for your brand, configure your webhook URL and verify the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.code.0186",
                        "value": "paysecure-sign"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0187",
                    "value": " signature, and handle the transition to "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.code.0188",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "neosurf.p.0189",
                    "value": " asynchronously."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "apis"
            },
            "children": [
              {
                "type": "text",
                "id": "neosurf.apis.0190",
                "value": "APIs"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "neosurf.p.0191",
                "value": "Ready to build? The full request and response reference, with live try-it runners, is on the API page."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "cards c3"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/api-neosurf#payin"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h4.0192",
                        "value": "PayIn API →"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0193",
                        "value": "Create a purchase and redirect the customer to enter their voucher code."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/api-neosurf#payout"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h4.0194",
                        "value": "PayOut API →"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0195",
                        "value": "Disburse funds to a customer's MyNeosurf account."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "card",
                  "href": "/webhooks"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.h4.0196",
                        "value": "Webhooks →"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "p",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "neosurf.p.0197",
                        "value": "Confirm PayIn and PayOut status changes and verify the signature."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "pg-foot"
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "Helpful",
                "props": {
                  "updated": "Last updated 09 Jul 2026 · v2.4"
                },
                "children": []
              },
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "prevnext"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "pn",
                      "href": "/paymint"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.small.0198",
                            "value": "Previous"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.b.0199",
                            "value": "← Paymint"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "pn next",
                      "href": "/payid"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.small.0200",
                            "value": "Next"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "b",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "neosurf.b.0201",
                            "value": "PayID →"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n        "
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n      "
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          }
        ]
      }
    }
  ]
});
