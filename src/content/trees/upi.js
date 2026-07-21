import { defineDocument } from '../schema.js';

export const upiTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "upi",
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
                    "id": "upi.doclink.0001",
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
                    "id": "upi.doclink.0002",
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
                "id": "upi.div.0003",
                "value": "UPI Solution"
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
                "id": "upi.h1.0004",
                "value": "UPI Solution"
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
                "id": "upi.p.0005",
                "value": "UPI (Unified Payments Interface) is India's real-time bank payment network. It links many bank accounts into a single mobile app, so customers pay and get paid straight from their own bank using a UPI app such as PhonePe, Google Pay or Paytm."
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
                "id": "upi.overview.0006",
                "value": "What UPI is"
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
                "id": "upi.p.0007",
                "value": "UPI unifies banking, fund routing and merchant payments under one roof, letting a customer run several bank accounts from one app. Paysecure's UPI suite lets you run it in both directions:"
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
                                "id": "upi.th.0008",
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
                                "id": "upi.th.0009",
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
                                    "id": "upi.b.0010",
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
                                "id": "upi.td.0011",
                                "value": "The customer transfers funds from their bank account to you, through a UPI app or by scanning a QR code."
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
                                    "id": "upi.b.0012",
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
                                "id": "upi.td.0013",
                                "value": "You disburse funds straight to a customer's bank account in real time over UPI, IMPS, RTGS or NEFT."
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
                        "id": "upi.b.0014",
                        "value": "India and INR."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0015",
                    "value": " UPI settles in Indian rupees, so the customer country is "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.code.0016",
                        "value": "IN"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0017",
                    "value": " and the currency is "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.code.0018",
                        "value": "INR"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0019",
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
              "id": "payin"
            },
            "children": [
              {
                "type": "text",
                "id": "upi.payin.0020",
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
                "id": "upi.p.0021",
                "value": "A PayIn lets you collect from a customer over UPI without asking for their VPA (virtual payment address). You initiate the request, Paysecure returns the payment options, and the customer completes the transfer from their UPI app. This suits app and mobile-based flows."
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
                    "tag": "img",
                    "props": {
                      "src": "/assets/upi-01-image.png",
                      "alt": "UPI PayIn flow: merchant initiates the request, Paysecure returns UPI payment options, the customer pays through their UPI app or by scanning a QR code, and completion is confirmed by webhook",
                      "loading": "lazy"
                    },
                    "children": []
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
                    "id": "upi.figcaption.0022",
                    "value": "Figure 1 · UPI PayIn flow"
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
                        "id": "upi.b.0023",
                        "value": "Initiate the request:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0024",
                    "value": " you send a PayIn to Paysecure with the customer's email or mobile number, the amount to collect and an optional message."
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
                        "id": "upi.b.0025",
                        "value": "Show the payment options:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0026",
                    "value": " Paysecure returns the UPI payment options. The customer can pay through PhonePe, Google Pay or Paytm, or by scanning a QR code with any bank app."
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
                        "id": "upi.b.0027",
                        "value": "Customer pays in their app:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0028",
                    "value": " they open their preferred UPI app and authorise the payment, or scan the QR code and pay."
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
                        "id": "upi.b.0029",
                        "value": "Confirm completion:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0030",
                    "value": " once the transfer completes, Paysecure sends a webhook with the transaction details and payment status."
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
                        "id": "upi.b.0031",
                        "value": "Update your records:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0032",
                    "value": " your system marks the customer's balance or order as paid."
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
                "id": "upi.p.0033",
                "value": "Two collection modes are available, set through the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "upi.code.0034",
                    "value": "paymentMethod"
                  }
                ]
              },
              {
                "type": "text",
                "id": "upi.p.0035",
                "value": " code:"
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
                                "id": "upi.th.0036",
                                "value": "Method code"
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
                                "id": "upi.th.0037",
                                "value": "How the customer pays"
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
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "upi.code.0038",
                                    "value": "UPI-QR"
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
                                "id": "upi.td.0039",
                                "value": "Paysecure returns a QR code. The customer scans it with any bank or UPI app and confirms the payment."
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
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "upi.code.0040",
                                    "value": "UPI-INTENT"
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
                                "id": "upi.td.0041",
                                "value": "Paysecure opens the customer's UPI app directly (PhonePe, Google Pay or Paytm intent) so they confirm without scanning."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "upi.p.0042",
                "value": "You can either send the customer to the Paysecure checkout page, or read the PayIn details from the response and show the QR code or intent inside your own cashier. Field-level request and response shapes are in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-upi#payin"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "upi.doclink.0043",
                    "value": "UPI API reference"
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
                          "src": "/assets/upi-video-flow.mp4",
                          "type": "video/mp4"
                        },
                        "children": []
                      },
                      {
                        "type": "text",
                        "id": "upi.video.0044",
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
                    "id": "upi.figcaption.0045",
                    "value": "Video: UPI payment flow"
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
                "id": "upi.payout.0046",
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
                "id": "upi.p.0047",
                "value": "A PayOut disburses funds to a customer's bank account in India over UPI, IMPS, RTGS or NEFT, for refunds, rewards, vendor settlements, payroll or loan disbursements."
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
                    "tag": "img",
                    "props": {
                      "src": "/assets/upi-02-image.png",
                      "alt": "UPI PayOut flow: merchant validates the beneficiary account, checks balance, initiates the payout with beneficiary and transfer details, and completion is confirmed by webhook",
                      "loading": "lazy"
                    },
                    "children": []
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
                    "id": "upi.figcaption.0048",
                    "value": "Figure 2 · UPI PayOut flow"
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
                        "id": "upi.b.0049",
                        "value": "Validate the account first:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0050",
                    "value": " we recommend validating the customer's bank account before you disburse."
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
                        "id": "upi.b.0051",
                        "value": "Check your balance:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0052",
                    "value": " make sure your merchant account holds enough float to cover the payout."
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
                        "id": "upi.b.0053",
                        "value": "Initiate the payout:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0054",
                    "value": " pass the beneficiary details along with the payout details. Beneficiary fields include the transfer type (IMPS, RTGS, NEFT or UPI), the IFSC code, the payee name and the bank account number."
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
                        "id": "upi.b.0055",
                        "value": "Confirm completion:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.li.0056",
                    "value": " on reaching a success or failure state, Paysecure notifies your platform by webhook with the final status and details."
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
                    "tag": "img",
                    "props": {
                      "src": "/assets/upi-04-payout.png",
                      "alt": "UPI PayOut API flow: create the payout, then poll Get Payout Status for the outcome",
                      "loading": "lazy"
                    },
                    "children": []
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
                    "id": "upi.figcaption.0057",
                    "value": "Figure 3 · PayOut processing at a glance"
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
                "id": "upi.p.0058",
                "value": "If a bank name is passed, use only a supported bank name; anything else can cause the payout to fail. If you would rather not pass a bank name, open the checkout URL in the response so the customer can pick their bank from a dropdown. The full list is in "
              },
              {
                "type": "element",
                "tag": "a",
                "props": {
                  "className": "inline",
                  "href": "#banks"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "upi.a.0059",
                    "value": "Supported banks"
                  }
                ]
              },
              {
                "type": "text",
                "id": "upi.p.0060",
                "value": " below."
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
                        "id": "upi.b.0061",
                        "value": "Fund your payout float."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0062",
                    "value": " Payouts draw on your INR balance. Check the balance before you disburse, and pass a valid IFSC code and account number so the transfer reaches the right beneficiary."
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
            "value": "\n\n            "
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "banks"
            },
            "children": [
              {
                "type": "text",
                "id": "upi.banks.0063",
                "value": "Supported banks"
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
                "id": "upi.p.0064",
                "value": "UPI is available to customers of the 134 Indian banks listed below. Coverage can change over time; your account manager has the current list for your account."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "details",
            "props": {
              "open": true
            },
            "children": [
              {
                "type": "text",
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "summary",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.b.0065",
                        "value": "134 supported banks"
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
                "tag": "div",
                "props": {
                  "className": "tbl-wrap"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
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
                                    "id": "upi.th.0066",
                                    "value": "SNo"
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
                                    "id": "upi.th.0067",
                                    "value": "Bank Name"
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
                                    "id": "upi.td.0068",
                                    "value": "1"
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
                                    "id": "upi.td.0069",
                                    "value": "Aditya Birla Payments Bank"
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
                                    "id": "upi.td.0070",
                                    "value": "2"
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
                                    "id": "upi.td.0071",
                                    "value": "Airtel Payments Bank"
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
                                    "id": "upi.td.0072",
                                    "value": "3"
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
                                    "id": "upi.td.0073",
                                    "value": "Allahabad Bank"
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
                                    "id": "upi.td.0074",
                                    "value": "4"
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
                                    "id": "upi.td.0075",
                                    "value": "Andhra Bank"
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
                                    "id": "upi.td.0076",
                                    "value": "5"
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
                                    "id": "upi.td.0077",
                                    "value": "Andhra Pradesh Grameena Vikas Bank"
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
                                    "id": "upi.td.0078",
                                    "value": "6"
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
                                    "id": "upi.td.0079",
                                    "value": "Andhra Pragathi Grameena Bank"
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
                                    "id": "upi.td.0080",
                                    "value": "7"
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
                                    "id": "upi.td.0081",
                                    "value": "Arunachal Pradesh Rural Bank"
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
                                    "id": "upi.td.0082",
                                    "value": "8"
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
                                    "id": "upi.td.0083",
                                    "value": "Aryavart Bank"
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
                                    "id": "upi.td.0084",
                                    "value": "9"
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
                                    "id": "upi.td.0085",
                                    "value": "Assam Gramin Vikash Bank"
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
                                    "id": "upi.td.0086",
                                    "value": "10"
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
                                    "id": "upi.td.0087",
                                    "value": "AU Small Finance Bank"
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
                                    "id": "upi.td.0088",
                                    "value": "11"
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
                                    "id": "upi.td.0089",
                                    "value": "Axis Bank"
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
                                    "id": "upi.td.0090",
                                    "value": "12"
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
                                    "id": "upi.td.0091",
                                    "value": "Bandhan Bank"
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
                                    "id": "upi.td.0092",
                                    "value": "13"
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
                                    "id": "upi.td.0093",
                                    "value": "Bangiya Gramin Vikash Bank"
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
                                    "id": "upi.td.0094",
                                    "value": "14"
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
                                    "id": "upi.td.0095",
                                    "value": "Bank DBS Indonesia"
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
                                    "id": "upi.td.0096",
                                    "value": "15"
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
                                    "id": "upi.td.0097",
                                    "value": "BANK OF BAHRAIN AND KUWAIT"
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
                                    "id": "upi.td.0098",
                                    "value": "16"
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
                                    "id": "upi.td.0099",
                                    "value": "Bank Of Baroda"
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
                                    "id": "upi.td.0100",
                                    "value": "17"
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
                                    "id": "upi.td.0101",
                                    "value": "Bank of India"
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
                                    "id": "upi.td.0102",
                                    "value": "18"
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
                                    "id": "upi.td.0103",
                                    "value": "Bank of Maharashtra"
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
                                    "id": "upi.td.0104",
                                    "value": "19"
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
                                    "id": "upi.td.0105",
                                    "value": "Baroda Gujarat Gramin Bank"
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
                                    "id": "upi.td.0106",
                                    "value": "20"
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
                                    "id": "upi.td.0107",
                                    "value": "Baroda Rajasthan Kshetriya Gramin Bank"
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
                                    "id": "upi.td.0108",
                                    "value": "21"
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
                                    "id": "upi.td.0109",
                                    "value": "Baroda Uttar Pradesh Gramin Bank"
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
                                    "id": "upi.td.0110",
                                    "value": "22"
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
                                    "id": "upi.td.0111",
                                    "value": "Bassein Catholic Co-operative Bank"
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
                                    "id": "upi.td.0112",
                                    "value": "23"
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
                                    "id": "upi.td.0113",
                                    "value": "BHARAT BANK"
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
                                    "id": "upi.td.0114",
                                    "value": "24"
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
                                    "id": "upi.td.0115",
                                    "value": "Canara Bank"
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
                                    "id": "upi.td.0116",
                                    "value": "25"
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
                                    "id": "upi.td.0117",
                                    "value": "CAPITAL SMALL FINANCE BANK LTD"
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
                                    "id": "upi.td.0118",
                                    "value": "26"
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
                                    "id": "upi.td.0119",
                                    "value": "Catholic Syrian Bank"
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
                                    "id": "upi.td.0120",
                                    "value": "27"
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
                                    "id": "upi.td.0121",
                                    "value": "Central Bank of India"
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
                                    "id": "upi.td.0122",
                                    "value": "28"
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
                                    "id": "upi.td.0123",
                                    "value": "Chaitanya Godavari Grameena Bank"
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
                                    "id": "upi.td.0124",
                                    "value": "29"
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
                                    "id": "upi.td.0125",
                                    "value": "Chhattisgarh Rajya Gramin Bank"
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
                                    "id": "upi.td.0126",
                                    "value": "30"
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
                                    "id": "upi.td.0127",
                                    "value": "Citi Bank"
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
                                    "id": "upi.td.0128",
                                    "value": "31"
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
                                    "id": "upi.td.0129",
                                    "value": "City Union Bank"
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
                                    "id": "upi.td.0130",
                                    "value": "32"
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
                                    "id": "upi.td.0131",
                                    "value": "Coastal Local Area Bank Limited"
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
                                    "id": "upi.td.0132",
                                    "value": "33"
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
                                    "id": "upi.td.0133",
                                    "value": "Corporation Bank"
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
                                    "id": "upi.td.0134",
                                    "value": "34"
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
                                    "id": "upi.td.0135",
                                    "value": "COSMOS BANK"
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
                                    "id": "upi.td.0136",
                                    "value": "35"
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
                                    "id": "upi.td.0137",
                                    "value": "CSB Bank"
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
                                    "id": "upi.td.0138",
                                    "value": "36"
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
                                    "id": "upi.td.0139",
                                    "value": "Dakshin Bihar Gramin Bank"
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
                                    "id": "upi.td.0140",
                                    "value": "37"
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
                                    "id": "upi.td.0141",
                                    "value": "DCB Bank"
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
                                    "id": "upi.td.0142",
                                    "value": "38"
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
                                    "id": "upi.td.0143",
                                    "value": "Dena Bank"
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
                                    "id": "upi.td.0144",
                                    "value": "39"
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
                                    "id": "upi.td.0145",
                                    "value": "Deutsche Bank"
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
                                    "id": "upi.td.0146",
                                    "value": "40"
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
                                    "id": "upi.td.0147",
                                    "value": "DEVELOPMENT BANK OF SINGAPORE"
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
                                    "id": "upi.td.0148",
                                    "value": "41"
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
                                    "id": "upi.td.0149",
                                    "value": "Dhanlaxmi Bank"
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
                                    "id": "upi.td.0150",
                                    "value": "42"
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
                                    "id": "upi.td.0151",
                                    "value": "DNLM"
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
                                    "id": "upi.td.0152",
                                    "value": "43"
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
                                    "id": "upi.td.0153",
                                    "value": "Ellaquai Dehati Bank"
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
                                    "id": "upi.td.0154",
                                    "value": "44"
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
                                    "id": "upi.td.0155",
                                    "value": "Equitas Bank"
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
                                    "id": "upi.td.0156",
                                    "value": "45"
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
                                    "id": "upi.td.0157",
                                    "value": "Equitas Small Finance Bank"
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
                                    "id": "upi.td.0158",
                                    "value": "46"
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
                                    "id": "upi.td.0159",
                                    "value": "ESAF Small Finance Bank"
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
                                    "id": "upi.td.0160",
                                    "value": "47"
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
                                    "id": "upi.td.0161",
                                    "value": "Exim Bank"
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
                                    "id": "upi.td.0162",
                                    "value": "48"
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
                                    "id": "upi.td.0163",
                                    "value": "Federal Bank LTD"
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
                                    "id": "upi.td.0164",
                                    "value": "49"
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
                                    "id": "upi.td.0165",
                                    "value": "Fincare Small Finance Bank"
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
                                    "id": "upi.td.0166",
                                    "value": "50"
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
                                    "id": "upi.td.0167",
                                    "value": "FINO PAYMENT BANK"
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
                                    "id": "upi.td.0168",
                                    "value": "51"
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
                                    "id": "upi.td.0169",
                                    "value": "GOPINATH PATIL PARSIK JANATA SAHAKARI BANK LTD"
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
                                    "id": "upi.td.0170",
                                    "value": "52"
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
                                    "id": "upi.td.0171",
                                    "value": "HDFC Bank"
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
                                    "id": "upi.td.0172",
                                    "value": "53"
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
                                    "id": "upi.td.0173",
                                    "value": "Himachal Pradesh Gramin Bank"
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
                                    "id": "upi.td.0174",
                                    "value": "54"
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
                                    "id": "upi.td.0175",
                                    "value": "HSBC Bank"
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
                                    "id": "upi.td.0176",
                                    "value": "55"
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
                                    "id": "upi.td.0177",
                                    "value": "ICICI Bank"
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
                                    "id": "upi.td.0178",
                                    "value": "56"
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
                                    "id": "upi.td.0179",
                                    "value": "IDBI Bank"
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
                                    "id": "upi.td.0180",
                                    "value": "57"
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
                                    "id": "upi.td.0181",
                                    "value": "IDFC Bank"
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
                                    "id": "upi.td.0182",
                                    "value": "58"
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
                                    "id": "upi.td.0183",
                                    "value": "India Post Payment Bank"
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
                                    "id": "upi.td.0184",
                                    "value": "59"
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
                                    "id": "upi.td.0185",
                                    "value": "Indian Bank"
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
                                    "id": "upi.td.0186",
                                    "value": "60"
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
                                    "id": "upi.td.0187",
                                    "value": "Indian Overseas Bank"
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
                                    "id": "upi.td.0188",
                                    "value": "61"
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
                                    "id": "upi.td.0189",
                                    "value": "IndusInd Bank"
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
                                    "id": "upi.td.0190",
                                    "value": "62"
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
                                    "id": "upi.td.0191",
                                    "value": "J&K Grameen Bank"
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
                                    "id": "upi.td.0192",
                                    "value": "63"
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
                                    "id": "upi.td.0193",
                                    "value": "Jammu and Kashmir Bank Limited"
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
                                    "id": "upi.td.0194",
                                    "value": "64"
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
                                    "id": "upi.td.0195",
                                    "value": "Jana Small Finance Bank"
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
                                    "id": "upi.td.0196",
                                    "value": "65"
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
                                    "id": "upi.td.0197",
                                    "value": "JANATA SAHAKARI BANK LTD PUNE"
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
                                    "id": "upi.td.0198",
                                    "value": "66"
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
                                    "id": "upi.td.0199",
                                    "value": "Jharkhand Rajya Gramin Bank"
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
                                    "id": "upi.td.0200",
                                    "value": "67"
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
                                    "id": "upi.td.0201",
                                    "value": "Jio Payments Bank"
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
                                    "id": "upi.td.0202",
                                    "value": "68"
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
                                    "id": "upi.td.0203",
                                    "value": "Karnataka Bank Limited"
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
                                    "id": "upi.td.0204",
                                    "value": "69"
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
                                    "id": "upi.td.0205",
                                    "value": "Karnataka Gramin Bank"
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
                                    "id": "upi.td.0206",
                                    "value": "70"
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
                                    "id": "upi.td.0207",
                                    "value": "Karnataka Vikas Grameena Bank"
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
                                    "id": "upi.td.0208",
                                    "value": "71"
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
                                    "id": "upi.td.0209",
                                    "value": "Karur Vysya Bank"
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
                                    "id": "upi.td.0210",
                                    "value": "72"
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
                                    "id": "upi.td.0211",
                                    "value": "Kashi Gomti Samyut Gramin Bank"
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
                                    "id": "upi.td.0212",
                                    "value": "73"
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
                                    "id": "upi.td.0213",
                                    "value": "Kerala Gramin Bank"
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
                                    "id": "upi.td.0214",
                                    "value": "74"
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
                                    "id": "upi.td.0215",
                                    "value": "Kotak Mahindra Bank"
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
                                    "id": "upi.td.0216",
                                    "value": "75"
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
                                    "id": "upi.td.0217",
                                    "value": "Lakshmi Vilas Bank"
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
                                    "id": "upi.td.0218",
                                    "value": "76"
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
                                    "id": "upi.td.0219",
                                    "value": "Madhya Bihar Gramin Bank"
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
                                    "id": "upi.td.0220",
                                    "value": "77"
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
                                    "id": "upi.td.0221",
                                    "value": "Madhya Pradesh Gramin Bank"
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
                                    "id": "upi.td.0222",
                                    "value": "78"
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
                                    "id": "upi.td.0223",
                                    "value": "Madhyanchal Gramin Bank"
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
                                    "id": "upi.td.0224",
                                    "value": "79"
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
                                    "id": "upi.td.0225",
                                    "value": "Maharashtra Gramin Bank"
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
                                    "id": "upi.td.0226",
                                    "value": "80"
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
                                    "id": "upi.td.0227",
                                    "value": "Manipur Rural Bank"
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
                                    "id": "upi.td.0228",
                                    "value": "81"
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
                                    "id": "upi.td.0229",
                                    "value": "MEGHALAYA RURAL BANK"
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
                                    "id": "upi.td.0230",
                                    "value": "82"
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
                                    "id": "upi.td.0231",
                                    "value": "Mizoram Rural Bank"
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
                                    "id": "upi.td.0232",
                                    "value": "83"
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
                                    "id": "upi.td.0233",
                                    "value": "Nagaland Rural Bank"
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
                                    "id": "upi.td.0234",
                                    "value": "84"
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
                                    "id": "upi.td.0235",
                                    "value": "Nainital Bank"
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
                                    "id": "upi.td.0236",
                                    "value": "85"
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
                                    "id": "upi.td.0237",
                                    "value": "NHB"
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
                                    "id": "upi.td.0238",
                                    "value": "86"
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
                                    "id": "upi.td.0239",
                                    "value": "North East Small Finance Bank"
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
                                    "id": "upi.td.0240",
                                    "value": "87"
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
                                    "id": "upi.td.0241",
                                    "value": "NSDL Payments Bank Limited"
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
                                    "id": "upi.td.0242",
                                    "value": "88"
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
                                    "id": "upi.td.0243",
                                    "value": "Odisha Gramya Bank"
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
                                    "id": "upi.td.0244",
                                    "value": "89"
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
                                    "id": "upi.td.0245",
                                    "value": "Oriental Bank of Commerce"
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
                                    "id": "upi.td.0246",
                                    "value": "90"
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
                                    "id": "upi.td.0247",
                                    "value": "Paschim Banga Gramin Bank"
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
                                    "id": "upi.td.0248",
                                    "value": "91"
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
                                    "id": "upi.td.0249",
                                    "value": "PAYTM Payments Bank LTD"
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
                                    "id": "upi.td.0250",
                                    "value": "92"
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
                                    "id": "upi.td.0251",
                                    "value": "Pragathi Krishna Gramin Bank"
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
                                    "id": "upi.td.0252",
                                    "value": "93"
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
                                    "id": "upi.td.0253",
                                    "value": "Pragati Krushna Gramina Bank"
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
                                    "id": "upi.td.0254",
                                    "value": "94"
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
                                    "id": "upi.td.0255",
                                    "value": "Prathama UP Gramin Bank"
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
                                    "id": "upi.td.0256",
                                    "value": "95"
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
                                    "id": "upi.td.0257",
                                    "value": "Puduvai Bharathiar Grama Bank"
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
                                    "id": "upi.td.0258",
                                    "value": "96"
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
                                    "id": "upi.td.0259",
                                    "value": "Punjab and Sind Bank"
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
                                    "id": "upi.td.0260",
                                    "value": "97"
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
                                    "id": "upi.td.0261",
                                    "value": "PUNJAB GRAMIN BANK"
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
                                    "id": "upi.td.0262",
                                    "value": "98"
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
                                    "id": "upi.td.0263",
                                    "value": "Punjab National Bank"
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
                                    "id": "upi.td.0264",
                                    "value": "99"
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
                                    "id": "upi.td.0265",
                                    "value": "Purvanchal Bank"
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
                                    "id": "upi.td.0266",
                                    "value": "100"
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
                                    "id": "upi.td.0267",
                                    "value": "Rajasthan Marudhara Gramin Bank"
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
                                    "id": "upi.td.0268",
                                    "value": "101"
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
                                    "id": "upi.td.0269",
                                    "value": "RBL BANK LTD"
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
                                    "id": "upi.td.0270",
                                    "value": "102"
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
                                    "id": "upi.td.0271",
                                    "value": "Reserve Bank of India"
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
                                    "id": "upi.td.0272",
                                    "value": "103"
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
                                    "id": "upi.td.0273",
                                    "value": "ROYAL BANK OF SCOTLAND"
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
                                    "id": "upi.td.0274",
                                    "value": "104"
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
                                    "id": "upi.td.0275",
                                    "value": "Saptagiri Grameena Bank"
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
                                    "id": "upi.td.0276",
                                    "value": "105"
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
                                    "id": "upi.td.0277",
                                    "value": "Saraswat Bank"
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
                                    "id": "upi.td.0278",
                                    "value": "106"
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
                                    "id": "upi.td.0279",
                                    "value": "Sarva Haryana Gramin Bank"
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
                                    "id": "upi.td.0280",
                                    "value": "107"
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
                                    "id": "upi.td.0281",
                                    "value": "Saurashtra Gramin Bank"
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
                                    "id": "upi.td.0282",
                                    "value": "108"
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
                                    "id": "upi.td.0283",
                                    "value": "Small Industries Development Bank of India"
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
                                    "id": "upi.td.0284",
                                    "value": "109"
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
                                    "id": "upi.td.0285",
                                    "value": "South Indian Bank"
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
                                    "id": "upi.td.0286",
                                    "value": "110"
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
                                    "id": "upi.td.0287",
                                    "value": "STANDARD CHARTERED BANK THAI PCL"
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
                                    "id": "upi.td.0288",
                                    "value": "111"
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
                                    "id": "upi.td.0289",
                                    "value": "State Bank of Hyderabad"
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
                                    "id": "upi.td.0290",
                                    "value": "112"
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
                                    "id": "upi.td.0291",
                                    "value": "State Bank of India"
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
                                    "id": "upi.td.0292",
                                    "value": "113"
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
                                    "id": "upi.td.0293",
                                    "value": "Subhadra Local Area Bank Ltd"
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
                                    "id": "upi.td.0294",
                                    "value": "114"
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
                                    "id": "upi.td.0295",
                                    "value": "Suco Souharda Sahakari Bank"
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
                                    "id": "upi.td.0296",
                                    "value": "115"
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
                                    "id": "upi.td.0297",
                                    "value": "Suryoday Small Finance Bank Ltd"
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
                                    "id": "upi.td.0298",
                                    "value": "116"
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
                                    "id": "upi.td.0299",
                                    "value": "SVC COOPERATIVE BANK LTD"
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
                                    "id": "upi.td.0300",
                                    "value": "117"
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
                                    "id": "upi.td.0301",
                                    "value": "Syndicate Bank"
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
                                    "id": "upi.td.0302",
                                    "value": "118"
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
                                    "id": "upi.td.0303",
                                    "value": "Tamil Nadu Grama Bank"
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
                                    "id": "upi.td.0304",
                                    "value": "119"
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
                                    "id": "upi.td.0305",
                                    "value": "Tamilnad Mercantile Bank Limited"
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
                                    "id": "upi.td.0306",
                                    "value": "120"
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
                                    "id": "upi.td.0307",
                                    "value": "Telangana grameena bank"
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
                                    "id": "upi.td.0308",
                                    "value": "121"
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
                                    "id": "upi.td.0309",
                                    "value": "Tripura Gramin Bank"
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
                                    "id": "upi.td.0310",
                                    "value": "122"
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
                                    "id": "upi.td.0311",
                                    "value": "UCO Bank"
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
                                    "id": "upi.td.0312",
                                    "value": "123"
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
                                    "id": "upi.td.0313",
                                    "value": "Ujjivan Small Finance Bank"
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
                                    "id": "upi.td.0314",
                                    "value": "124"
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
                                    "id": "upi.td.0315",
                                    "value": "Union Bank of India"
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
                                    "id": "upi.td.0316",
                                    "value": "125"
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
                                    "id": "upi.td.0317",
                                    "value": "United Bank of India"
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
                                    "id": "upi.td.0318",
                                    "value": "126"
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
                                    "id": "upi.td.0319",
                                    "value": "Utkal Grameen Bank"
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
                                    "id": "upi.td.0320",
                                    "value": "127"
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
                                    "id": "upi.td.0321",
                                    "value": "Utkarsh Small Finance Bank"
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
                                    "id": "upi.td.0322",
                                    "value": "128"
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
                                    "id": "upi.td.0323",
                                    "value": "Uttar Banga Kshetriya Gramin Bank"
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
                                    "id": "upi.td.0324",
                                    "value": "129"
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
                                    "id": "upi.td.0325",
                                    "value": "UTTAR BIHAR GRAMIN BANK"
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
                                    "id": "upi.td.0326",
                                    "value": "130"
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
                                    "id": "upi.td.0327",
                                    "value": "Uttarakhand Gramin Bank"
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
                                    "id": "upi.td.0328",
                                    "value": "131"
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
                                    "id": "upi.td.0329",
                                    "value": "Vananchal Gramin Bank"
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
                                    "id": "upi.td.0330",
                                    "value": "132"
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
                                    "id": "upi.td.0331",
                                    "value": "Vidharbha Konkan Gramin Bank"
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
                                    "id": "upi.td.0332",
                                    "value": "133"
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
                                    "id": "upi.td.0333",
                                    "value": "Vijaya Bank"
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
                                    "id": "upi.td.0334",
                                    "value": "134"
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
                                    "id": "upi.td.0335",
                                    "value": "YES BANK"
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
                "id": "upi.testing.0336",
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
                "id": "upi.p.0337",
                "value": "UPI cannot be exercised in the sandbox; only cards can. Validate UPI flows in live with small amounts once your account manager has enabled the method and INR for your brand. See "
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
                    "id": "upi.doclink.0338",
                    "value": "Testing APMs"
                  }
                ]
              },
              {
                "type": "text",
                "id": "upi.p.0339",
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
                        "id": "upi.b.0340",
                        "value": "Before you go live:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0341",
                    "value": " confirm UPI and INR are enabled for your brand, configure your webhook URL and verify the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.code.0342",
                        "value": "paysecure-sign"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0343",
                    "value": " signature, and handle the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.code.0344",
                        "value": "payment_in_process"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0345",
                    "value": " to "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.code.0346",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "upi.p.0347",
                    "value": " transition asynchronously."
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
                "id": "upi.apis.0348",
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
                "id": "upi.p.0349",
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
                  "href": "/api-upi#payin"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.h4.0350",
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
                        "id": "upi.p.0351",
                        "value": "Create a purchase and collect over UPI-QR or UPI-INTENT."
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
                  "href": "/api-upi#payout"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "upi.h4.0352",
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
                        "id": "upi.p.0353",
                        "value": "Disburse to a customer's bank account over UPI, IMPS, RTGS or NEFT."
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
                        "id": "upi.h4.0354",
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
                        "id": "upi.p.0355",
                        "value": "Confirm the final status for PayIn and PayOut callbacks."
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
                      "href": "/pix"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "upi.small.0356",
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
                            "id": "upi.b.0357",
                            "value": "← PIX"
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
                      "href": "/spei"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "upi.small.0358",
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
                            "id": "upi.b.0359",
                            "value": "SPEI →"
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
