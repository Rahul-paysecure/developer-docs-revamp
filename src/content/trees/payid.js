import { defineDocument } from '../schema.js';

export const payidTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "payid",
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
                    "id": "payid.doclink.0001",
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
                    "id": "payid.doclink.0002",
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
                "id": "payid.div.0003",
                "value": "PayID"
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
                "id": "payid.h1.0004",
                "value": "PayID"
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
                "id": "payid.p.0005",
                "value": "PayID is Australia's real-time account-to-account payment rail, built on the New Payments Platform (NPP). Customers pay and get paid using a simple identifier such as a mobile number, email address or ABN, so there is no need to remember a BSB and account number."
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
                "id": "payid.overview.0006",
                "value": "What PayID is"
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
                "id": "payid.p.0007",
                "value": "A PayID is a user-friendly alias linked to a bank account. Payments made to a PayID are resolved in real time through the NPP to the associated account. Paysecure's PayID suite lets you run it in both directions:"
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
                                "id": "payid.th.0008",
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
                                "id": "payid.th.0009",
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
                                    "id": "payid.b.0010",
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
                                "id": "payid.td.0011",
                                "value": "The customer sends funds from their bank account to you, using the PayID Paysecure returns."
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
                                    "id": "payid.b.0012",
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
                                "id": "payid.td.0013",
                                "value": "You disburse funds straight to a customer's account in real time, for refunds, rewards, payroll or supplier settlements."
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
                        "id": "payid.b.0014",
                        "value": "Australia and AUD."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0015",
                    "value": " PayID settles in Australian dollars, so the customer country is "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0016",
                        "value": "AU"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0017",
                    "value": " and the currency is "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0018",
                        "value": "AUD"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0019",
                    "value": ". Completion is asynchronous: rely on the webhook, not the redirect, to confirm a payment."
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
                "id": "payid.concepts.0020",
                "value": "Concepts"
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
                "id": "payid.p.0021",
                "value": "A few ideas underpin how PayID works before you integrate."
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
                        "id": "payid.b.0022",
                        "value": "PayID alias:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0023",
                    "value": " a user-friendly alias such as an email address, mobile number, ABN or Organisation ID, mapped to a bank account through the NPP."
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
                        "id": "payid.b.0024",
                        "value": "Method codes:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0025",
                    "value": " PayIn uses "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0026",
                        "value": "PAYID"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0027",
                    "value": "; PayOut uses "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0028",
                        "value": "PAYOUT-PAYID"
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
                        "id": "payid.b.0029",
                        "value": "Hosted PayIn only:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0030",
                    "value": " there is no inline or in-page rendering. Every instruction, the alias, beneficiary and reference, is shown on Paysecure's hosted page, and the customer is always redirected there before returning to your success or failure URL."
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
                        "id": "payid.b.0031",
                        "value": "Real-time settlement:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0032",
                    "value": " the NPP runs 24/7, so funds settle in real time. Rare bank maintenance can add a delay."
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
                        "id": "payid.b.0033",
                        "value": "Refunds via push:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0034",
                    "value": " the NPP has no \"pull\" reversal, so refunds are executed as payouts to a PayID, tied to the original purchase."
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
              "id": "payin"
            },
            "children": [
              {
                "type": "text",
                "id": "payid.payin.0035",
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
                "id": "payid.p.0036",
                "value": "A PayIn lets you collect from a customer over PayID. You initiate the request, Paysecure returns a hosted checkout page and the merchant PayID, and the customer completes the transfer from their bank."
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
                        "id": "payid.b.0037",
                        "value": "Customer initiates payment:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0038",
                    "value": " on your checkout page or app, the customer selects PayID and proceeds."
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
                        "id": "payid.b.0039",
                        "value": "Initiate the request:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0040",
                    "value": " you send a PayIn to Paysecure with the amount and currency. Paysecure responds with a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0041",
                        "value": "purchaseId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0042",
                    "value": ", a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0043",
                        "value": "checkout_url"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0044",
                    "value": " and the merchant PayID the customer should transfer funds to."
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
                        "id": "payid.b.0045",
                        "value": "Customer authorises in their banking app:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0046",
                    "value": " they log in to internet or mobile banking, enter the PayID, enter the exact amount and confirm the transfer."
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
                        "id": "payid.b.0047",
                        "value": "Real-time bank transfer:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0048",
                    "value": " the customer's bank processes the payment through the NPP and the funds are credited to Paysecure in real time."
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
                        "id": "payid.b.0049",
                        "value": "Confirm completion:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0050",
                    "value": " once the funds arrive, Paysecure sends a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0051",
                        "value": "purchase.paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0052",
                    "value": " webhook. Your system marks the order as paid."
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
                        "id": "payid.b.0053",
                        "value": "Handle errors:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0054",
                    "value": " if the payment fails due to an invalid PayID, a bank rejection or insufficient funds, Paysecure returns a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0055",
                        "value": "purchase.failed"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0056",
                    "value": " status."
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
                        "id": "payid.b.0057",
                        "value": "Hosted checkout only."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0058",
                    "value": " PayID PayIn runs through the Paysecure hosted checkout. Send the customer to the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0059",
                        "value": "checkout_url"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0060",
                    "value": ", which shows the amount and the merchant PayID to pay."
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
                "id": "payid.p.0061",
                "value": "The hosted page shows the PayID alias, the beneficiary name, the exact amount to pay, an optional payment reference and clear copy buttons. In the customer's bank app the flow is \"Pay to PayID\": they enter the alias, the amount and the reference if one is shown, then confirm. Once the funds post, the hosted page redirects the customer to your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payid.code.0062",
                    "value": "success_redirect"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payid.p.0063",
                "value": " or "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payid.code.0064",
                    "value": "failure_redirect"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payid.p.0065",
                "value": ". You may also poll "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "payid.code.0066",
                    "value": "GET /purchases/{purchaseId}"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payid.p.0067",
                "value": " if a webhook has not yet arrived."
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
                "id": "payid.p.0068",
                "value": "Field-level request and response shapes are in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-payid#payin"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "payid.doclink.0069",
                    "value": "PayID API reference"
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
                          "src": "/assets/payid-video-flow.mp4",
                          "type": "video/mp4"
                        },
                        "children": []
                      },
                      {
                        "type": "text",
                        "id": "payid.video.0070",
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
                    "id": "payid.figcaption.0071",
                    "value": "Video: PayID deposit flow"
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
            "tag": "h2",
            "props": {
              "id": "payout"
            },
            "children": [
              {
                "type": "text",
                "id": "payid.payout.0072",
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
                "id": "payid.p.0073",
                "value": "A PayOut disburses funds to a customer's bank account over PayID, for refunds, rewards, payroll, commissions or supplier settlements. Refunds are handled as payouts."
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
                        "id": "payid.b.0074",
                        "value": "User requests a withdrawal:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0075",
                    "value": " a customer initiates a payout, such as a refund, reward or withdrawal, from your interface."
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
                        "id": "payid.b.0076",
                        "value": "Merchant approval:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0077",
                    "value": " you verify and approve the request."
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
                        "id": "payid.b.0078",
                        "value": "Initiate the request:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0079",
                    "value": " you send a PayOut to Paysecure with the recipient's PayID, the amount, the currency and optional bank details."
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
                        "id": "payid.b.0080",
                        "value": "Bank transfer through the NPP:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0081",
                    "value": " Paysecure initiates the payout and the funds are credited to the recipient's account in real time."
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
                        "id": "payid.b.0082",
                        "value": "Confirm completion:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0083",
                    "value": " once successful, Paysecure sends a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0084",
                        "value": "payout.success"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0085",
                    "value": " webhook so you can update your system."
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
                        "id": "payid.b.0086",
                        "value": "Failure scenarios:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.li.0087",
                    "value": " if the PayID is invalid or unregistered, the payout fails. Paysecure responds with an error and you can retry after fixing the issue."
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
                        "id": "payid.b.0088",
                        "value": "Check the recipient PayID."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0089",
                    "value": " A payout to an invalid or unregistered PayID fails. Confirm the recipient's PayID before you disburse, and retry once it is corrected."
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
                "id": "payid.edge-cases.0090",
                "value": "Edge cases and handling"
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
                                "id": "payid.th.0091",
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
                                "id": "payid.th.0092",
                                "value": "What happens"
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
                                "id": "payid.td.0093",
                                "value": "Invalid or unregistered PayID (PayIn)"
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
                                "id": "payid.td.0094",
                                "value": "The customer's bank flags it before sending, so the payment never arrives. The purchase stays pending or is cancelled."
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
                                "id": "payid.td.0095",
                                "value": "Name mismatch warning (PayIn)"
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
                                "id": "payid.td.0096",
                                "value": "The hosted page shows your beneficiary name. Ask customers to confirm it matches what their bank app displays before they confirm the transfer."
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
                                "id": "payid.td.0097",
                                "value": "Bank maintenance delays"
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
                                "id": "payid.td.0098",
                                "value": "Rare, but settlement can be delayed. The webhook follows once the transfer completes."
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
                                "id": "payid.td.0099",
                                "value": "Payout failure"
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
                                "id": "payid.td.0100",
                                "value": "An invalid alias or format returns a payout error. Correct the recipient PayID and retry."
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
                "id": "payid.testing.0101",
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
                "id": "payid.p.0102",
                "value": "PayID cannot be exercised in the sandbox; only cards can. Validate PayID flows in live with small amounts once your account manager has enabled the method and AUD for your brand. See "
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
                    "id": "payid.doclink.0103",
                    "value": "Testing APMs"
                  }
                ]
              },
              {
                "type": "text",
                "id": "payid.p.0104",
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
                        "id": "payid.b.0105",
                        "value": "Before you go live:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0106",
                    "value": " confirm PayID and AUD are enabled for your brand, configure your webhook URL and verify the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0107",
                        "value": "paysecure-sign"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0108",
                    "value": " signature, and handle the transition to "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.code.0109",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "payid.p.0110",
                    "value": " asynchronously through the webhook."
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
                "id": "payid.apis.0111",
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
                "id": "payid.p.0112",
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
                  "href": "/api-payid#payin"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.h4.0113",
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
                        "id": "payid.p.0114",
                        "value": "Create a purchase and read the checkout URL and merchant PayID."
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
                  "href": "/api-payid#payout"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "payid.h4.0115",
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
                        "id": "payid.p.0116",
                        "value": "Disburse funds to a customer's account over PayID."
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
                        "id": "payid.h4.0117",
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
                        "id": "payid.p.0118",
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
                      "href": "/neosurf"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "payid.small.0119",
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
                            "id": "payid.b.0120",
                            "value": "← Neosurf"
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
                      "href": "/cryptobridge"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "payid.small.0121",
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
                            "id": "payid.b.0122",
                            "value": "CryptoBridge →"
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
