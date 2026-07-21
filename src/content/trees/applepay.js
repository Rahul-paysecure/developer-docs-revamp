import { defineDocument } from '../schema.js';

export const applepayTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "applepay",
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
                    "id": "applepay.doclink.0001",
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
                  "href": "/guides"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.doclink.0002",
                    "value": "Guides"
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
                "id": "applepay.div.0003",
                "value": "Payment methods"
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
                "id": "applepay.div.0004",
                "value": "Apple Pay"
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
                "id": "applepay.h1.0005",
                "value": "Apple Pay"
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
                "id": "applepay.p.0006",
                "value": "Accept cards saved to your customers' Apple Wallet on iPhone, iPad, Mac and Apple Watch. Two ways to integrate: let the Paysecure cashier host the Apple Pay button, or render it on your own checkout."
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
              "id": "how-it-works"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.how-it-works.0007",
                "value": "How Apple Pay works"
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
                "id": "applepay.p.0008",
                "value": "When the customer taps the Apple Pay button, Safari (or another Apple Pay-capable browser on Apple hardware) shows the Apple Pay payment sheet listing the cards in the customer's Wallet. Before the sheet appears, the site must prove it is an approved merchant through the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0009",
                    "value": "merchant validation"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0010",
                "value": " handshake. The customer authenticates with Face ID, Touch ID or passcode, and Apple returns an encrypted payment token to whichever page hosts the button. The token can only be opened by the holder of the matching "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0011",
                    "value": "Payment Processing Certificate"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0012",
                "value": " private key: you, Paysecure, or your assigned processor."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0013",
                "value": "What an Apple Pay credential is"
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
                "id": "applepay.p.0014",
                "value": "Apple Pay never exposes the customer's real card number. Every transaction uses a "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0015",
                    "value": "device account number (DPAN)"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0016",
                "value": ", a network token provisioned to the device, together with a per-transaction cryptogram. In Google Pay terms, Apple Pay behaves like "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0017",
                    "value": "CRYPTOGRAM_3DS"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0018",
                "value": " for every transaction; there is no "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0019",
                    "value": "PAN_ONLY"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0020",
                "value": " equivalent. The credential type inside the decrypted token is signalled by "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0021",
                    "value": "paymentDataType"
                  }
                ]
              },
              {
                "type": "text",
                "value": ":"
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
                                "id": "applepay.th.0022",
                                "value": "paymentDataType"
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
                                "id": "applepay.th.0023",
                                "value": "What it carries"
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
                                "id": "applepay.th.0024",
                                "value": "Typical networks"
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
                                    "id": "applepay.code.0025",
                                    "value": "3DSecure"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0026",
                                    "value": "onlinePaymentCryptogram"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0027",
                                "value": " (a 3-D Secure / network cryptogram such as a Visa TAVV or Mastercard UCAF), plus sometimes an "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0028",
                                    "value": "eciIndicator"
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
                                "id": "applepay.td.0029",
                                "value": "Visa, Mastercard, Amex and most global networks"
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
                                    "id": "applepay.code.0030",
                                    "value": "EMV"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0031",
                                    "value": "emvData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0032",
                                "value": " and, where present, "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0033",
                                    "value": "encryptedPINData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0034",
                                "value": ": a full EMV cryptogram payload"
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
                                "id": "applepay.td.0035",
                                "value": "China UnionPay, Discover and selected regional networks"
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
                        "id": "applepay.b.0036",
                        "value": "No PAN_ONLY mode."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0037",
                    "value": " Because the credential is always tokenised and device-authenticated, the network treats it as strongly authenticated and fraud liability typically shifts to the issuer. There is no card-on-file equivalent as there is with Google Pay."
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0038",
                "value": "Token security model"
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
                "id": "applepay.p.0039",
                "value": "Apple signs and encrypts every token. The signature is a CMS / PKCS#7 detached signature chaining to Apple's root CA through Apple's Apple Pay leaf and intermediate certificates; it binds the encrypted data, the ephemeral public key and the transaction ID. For version "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0040",
                    "value": "EC_v1"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0041",
                "value": " the payload is encrypted with ECIES: ECDH on curve NIST P-256 between an ephemeral key and your Payment Processing Certificate public key, a NIST SP 800-56A KDF (SHA-256, seeded with your Merchant ID) and AES-256-GCM. A legacy "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0042",
                    "value": "RSA_v1"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0043",
                "value": " version exists for a small number of regions. You only implement verification and decryption yourself in the merchant-decryption flow; in the Paysecure-decryption flow the decrypting party handles all of it."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0044",
                "value": "How Apple Pay differs from Google Pay"
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
                "id": "applepay.p.0045",
                "value": "One structural difference shapes the whole integration: there is "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0046",
                    "value": "no "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0047",
                        "value": "PAYMENT_GATEWAY"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " / "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0048",
                        "value": "DIRECT"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.b.0049",
                    "value": " split"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0050",
                "value": ". Every Apple Pay token is always encrypted to a Payment Processing Certificate registered against your Apple Merchant ID. The only real variable is who holds the matching private key and therefore decrypts the token. Two independent certificates always live on your Merchant ID:"
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
                                "id": "applepay.th.0051",
                                "value": "Certificate"
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
                                "id": "applepay.th.0052",
                                "value": "Purpose & custody"
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
                                    "id": "applepay.b.0053",
                                    "value": "Payment Processing Certificate"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0054",
                                "value": " (EC P-256)"
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
                                "id": "applepay.td.0055",
                                "value": "Apple encrypts the payment token to its public key; the matching private key decrypts. Registered against your Merchant ID. Expires every 25 months"
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
                                    "id": "applepay.b.0056",
                                    "value": "Merchant Identity Certificate"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0057",
                                "value": " (RSA 2048)"
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
                                "id": "applepay.td.0058",
                                "value": "Authenticates the "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0059",
                                    "value": "validateMerchant"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0060",
                                "value": " call over mutual TLS. Unrelated to token encryption; required in all flows"
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
              "id": "apple-setup"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.apple-setup.0061",
                "value": "Apple Developer account and Merchant ID setup"
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
                "id": "applepay.p.0062",
                "value": "All Apple Pay configuration lives in your own Apple Developer account at "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0063",
                    "value": "developer.apple.com"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0064",
                "value": " under Certificates, Identifiers & Profiles. You own this account; Paysecure cannot create it for you. Complete this section before either integration. What differs between the two cashiers is only which domains you register and who supplies the certificate requests, noted inline below. The console figures are simplified illustrative reproductions; insert your own screenshots before publishing internally."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0065",
                "value": "1. Enrol and create your Merchant ID"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ol",
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
                    "type": "text",
                    "id": "applepay.li.0066",
                    "value": "Enrol your organisation in the Apple Developer Program at "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0067",
                        "value": "developer.apple.com/programs"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0068",
                    "value": ". Use an organisation account tied to a role-based Apple ID your business owns long-term, not an individual employee's personal Apple ID. Apple verifies your legal entity (D-U-N-S number) before enrolment completes."
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
                    "type": "text",
                    "id": "applepay.li.0069",
                    "value": "In Certificates, Identifiers & Profiles → Identifiers, create a Merchant ID (Merchant Identifier) in reverse-DNS form, e.g. "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0070",
                        "value": "merchant.com.yourcompany.store"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0071",
                    "value": ". A Merchant ID never expires and can be reused across sites and apps."
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
                    "type": "text",
                    "id": "applepay.li.0072",
                    "value": "Record the Merchant ID exactly. You use it as "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0073",
                        "value": "merchantIdentifier"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0074",
                    "value": " in the merchant-validation request and as "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0075",
                        "value": "apple_merchant_id"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0076",
                    "value": " in the Paysecure API. It is also bound into the token's key-derivation step, so the decrypting party must know it. Share it with Paysecure: it is an identifier, not a secret."
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
                      "src": "/assets/applepay-console-merchant-id.png",
                      "alt": "Creating a Merchant Identifier in the Apple Developer account",
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
                    "id": "applepay.figcaption.0077",
                    "value": "Figure 1 · Creating a Merchant Identifier in Certificates, Identifiers & Profiles (illustrative reproduction; replace with your own console screenshot)"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0078",
                "value": "2. Register and verify your web domains"
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
                "id": "applepay.p.0079",
                "value": "Apple only issues tokens to domains registered and verified against your Merchant ID. Which domains you register depends on where the button is served:"
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
                                "id": "applepay.th.0080",
                                "value": "Integration"
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
                                "id": "applepay.th.0081",
                                "value": "Domains to register"
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
                                "id": "applepay.th.0082",
                                "value": "Association file"
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
                                    "id": "applepay.b.0083",
                                    "value": "Paysecure cashier"
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
                                "type": "element",
                                "tag": "b",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.b.0084",
                                    "value": "Paysecure's"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0085",
                                "value": " cashier domains (Sandbox and Production), provided at onboarding"
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
                                "id": "applepay.td.0086",
                                "value": "Paysecure already hosts the "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0087",
                                    "value": "apple-developer-merchantid-domain-association"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0088",
                                "value": " file on them; you just add the domains and click Verify"
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
                                    "id": "applepay.b.0089",
                                    "value": "Your merchant cashier"
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
                                "id": "applepay.td.0090",
                                "value": "Your own cashier domains and subdomains, in both Sandbox and Production"
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
                                "id": "applepay.td.0091",
                                "value": "You host the association file, unmodified, at "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0092",
                                    "value": "/.well-known/apple-developer-merchantid-domain-association"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0093",
                                "value": " over HTTPS with strong TLS, then click Verify"
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
                "id": "applepay.p.0094",
                "value": "For your own cashier, the domain must serve a strong TLS configuration (an SSL Labs grade of A is the practical minimum) or verification fails. Repeat for each domain and subdomain that renders the Apple Pay button. If you automate domain management, you can also register domains programmatically through the Apple Pay Web Merchant Registration API instead of the developer console."
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/applepay-hosted-domains.png",
                      "alt": "Registering the Paysecure cashier domains",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/applepay-console-domains.png",
                      "alt": "Hosting the domain association file on your own domain",
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
                    "id": "applepay.figcaption.0095",
                    "value": "Figure 2 · Registering domains against your Merchant ID: Paysecure cashier domains (left; Paysecure hosts the file) and your own domains (right; you host the file). Illustrative reproductions"
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
                    "type": "text",
                    "id": "applepay.p.0096",
                    "value": "If Paysecure runs merchant validation on your behalf (merchant-cashier model), Paysecure's cashier / validation domain must also be registered against your Merchant ID; Paysecure provides the exact domains at onboarding."
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0097",
                "value": "3. The two certificates"
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
                "id": "applepay.p.0098",
                "value": "Both certificates are obtained the same way: in your Merchant ID, open the matching section, choose "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0099",
                    "value": "Create Certificate"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0100",
                "value": ", upload a Certificate Signing Request (CSR), and download the certificate Apple issues. Who generates the key pair and CSR (and therefore who holds the private key) is what defines your flow."
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
                "id": "applepay.p.0101",
                "value": "The "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0102",
                    "value": "Merchant Identity Certificate"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0103",
                "value": " (RSA 2048) is a TLS client certificate that authenticates the merchant-validation call to Apple. Whoever performs the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0104",
                    "value": "validateMerchant"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0105",
                "value": " handshake must hold it and its private key."
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
                "id": "applepay.p.0106",
                "value": "The "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0107",
                    "value": "Payment Processing Certificate"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0108",
                "value": " (EC P-256) carries the public key Apple uses to encrypt the token; the matching private key decrypts. It is associated with your Merchant ID, expires every 25 months, and can be revoked. Who holds the private key:"
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
                                "id": "applepay.th.0109",
                                "value": "Case"
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
                                "id": "applepay.th.0110",
                                "value": "Who generates the key pair / CSR"
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
                                "id": "applepay.th.0111",
                                "value": "Who holds the private key (decrypts)"
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
                                "id": "applepay.td.0112",
                                "value": "A · Paysecure decryption, your certificate"
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
                                "id": "applepay.td.0113",
                                "value": "You generate the EC key pair and CSR; upload the CSR to your Merchant ID"
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
                                "id": "applepay.td.0114",
                                "value": "Not you: you share the private key with Paysecure, who decrypts"
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
                                "id": "applepay.td.0115",
                                "value": "B · Paysecure decryption, Paysecure CSR (recommended)"
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
                                "id": "applepay.td.0116",
                                "value": "Paysecure generates the key pair and CSR; you upload Paysecure's CSR to your Merchant ID"
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
                                "id": "applepay.td.0117",
                                "value": "Paysecure: the private key never leaves Paysecure"
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
                                "id": "applepay.td.0118",
                                "value": "C · Merchant decryption"
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
                                "id": "applepay.td.0119",
                                "value": "You generate the EC key pair and CSR; upload the CSR to your Merchant ID"
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
                                "id": "applepay.td.0120",
                                "value": "You, on your own servers (full PCI SAQ D)"
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
                                "id": "applepay.td.0121",
                                "value": "Variant · Processor decryption"
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
                                "id": "applepay.td.0122",
                                "value": "The assigned processor supplies a CSR; you upload it to your Merchant ID"
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
                                "id": "applepay.td.0123",
                                "value": "The processor, in its own PCI zone"
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
                "id": "applepay.p.0124",
                "value": "On the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0125",
                    "value": "Paysecure hosted cashier"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0126",
                "value": " both certificates are always created from CSRs Paysecure supplies (case B): you upload the two CSRs to your Merchant ID, return the issued certificates, and both private keys are generated by and never leave Paysecure. On "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0127",
                    "value": "your own cashier"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0128",
                "value": ", you choose the flow above."
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/applepay-console-identity-cert.png",
                      "alt": "Creating the Merchant Identity Certificate from a CSR",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/applepay-console-processing-cert.png",
                      "alt": "Creating the Payment Processing Certificate from a CSR",
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
                    "id": "applepay.figcaption.0129",
                    "value": "Figure 3 · Creating the Merchant Identity Certificate (left) and the Payment Processing Certificate (right) from a CSR. Illustrative reproductions"
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
                        "id": "applepay.b.0130",
                        "value": "Plan rotation."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0131",
                    "value": " The Payment Processing Certificate expires every 25 months. Apple lets you keep more than one active certificate to support zero-downtime rotation. Diarise the change at least a month ahead of expiry."
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
              "id": "paysecure-cashier"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.paysecure-cashier.0132",
                "value": "Apple Pay on the Paysecure cashier"
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
                "id": "applepay.p.0133",
                "value": "You create a purchase with the API and redirect the customer to the returned "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0134",
                    "value": "checkout_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0135",
                "value": ". The Paysecure cashier renders the Apple Pay button, runs the Apple Pay JavaScript, handles brand-guideline compliance, performs merchant validation, collects the token, and decrypts it. "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0136",
                    "value": "Your systems never see the Apple Pay token"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0137",
                "value": ", and there is no Apple Pay code for you to write. Written for backend teams integrating the Purchases API and the operations owner of your Apple Developer account."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0138",
                "value": "Division of responsibilities"
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
                                "id": "applepay.th.0139",
                                "value": "Responsibility"
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
                                "id": "applepay.th.0140",
                                "value": "You (merchant)"
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
                                "id": "applepay.th.0141",
                                "value": "Paysecure"
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
                                "id": "applepay.td.0142",
                                "value": "Cashier page, Apple Pay button, JS & branding"
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
                                "id": "applepay.td.0143",
                                "value": "No; you only redirect to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0144",
                                    "value": "checkout_url"
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
                                "id": "applepay.td.0145",
                                "value": "Yes; hosted cashier, brand-guideline compliant"
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
                                "id": "applepay.td.0146",
                                "value": "Apple Developer account, Merchant ID & Apple review"
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
                                "id": "applepay.td.0147",
                                "value": "Yes; your own account. Paysecure supplies domains, CSRs & screenshots"
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
                                "id": "applepay.td.0148",
                                "value": "Provides CSRs, cashier domains, screenshots & guidance"
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
                                "id": "applepay.td.0149",
                                "value": "Domain verification"
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
                                "id": "applepay.td.0150",
                                "value": "Yes; register the Paysecure cashier domains"
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
                                "id": "applepay.td.0151",
                                "value": "Hosts the association file on its cashier domain"
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
                                "id": "applepay.td.0152",
                                "value": "Merchant validation ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0153",
                                    "value": "validateMerchant"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ")"
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
                                "id": "applepay.td.0154",
                                "value": "No"
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
                                "id": "applepay.td.0155",
                                "value": "Yes; using the Merchant Identity Certificate it holds"
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
                                "id": "applepay.td.0156",
                                "value": "Token handling & decryption"
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
                                "id": "applepay.td.0157",
                                "value": "Never sees the token"
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
                                "id": "applepay.td.0158",
                                "value": "Yes; decrypts with the Payment Processing private key it holds"
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
                                "id": "applepay.td.0159",
                                "value": "Purchase creation, redirects, webhooks"
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
                                "id": "applepay.td.0160",
                                "value": "Yes; "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0161",
                                    "value": "POST /purchases/"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0162",
                                "value": ", then redirect"
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
                                "id": "applepay.td.0163",
                                "value": "Processes, routes, notifies"
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
                                "id": "applepay.td.0164",
                                "value": "PCI DSS scope for Apple Pay card data"
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
                                "id": "applepay.td.0165",
                                "value": "None"
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
                                "id": "applepay.td.0166",
                                "value": "PCI DSS Level 1"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0167",
                "value": "The certificate model"
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
                "id": "applepay.p.0168",
                "value": "Two certificates live on your Apple Merchant ID, and on the hosted cashier both are created from CSRs that Paysecure supplies. You never generate a key pair and never hold or send a private key: you only upload the two CSRs to your own Merchant ID and return the issued certificates to Paysecure. This keeps your PCI scope at none and means there is no key material on your systems to protect or rotate (Paysecure manages rotation ahead of the 25-month Payment Processing Certificate expiry)."
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/applepay-hosted-processing-cert.png",
                      "alt": "Payment Processing Certificate created from Paysecure's CSR",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/applepay-hosted-identity-cert.png",
                      "alt": "Merchant Identity Certificate created from Paysecure's CSR",
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
                    "id": "applepay.figcaption.0169",
                    "value": "Figure 4 · On the hosted cashier both certificates are created from Paysecure's CSRs: Payment Processing (left) and Merchant Identity (right); Paysecure holds both private keys. Illustrative reproductions"
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0170",
                "value": "End-to-end sequence"
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
              "className": "seq"
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
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0171",
                        "value": "1"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who m"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0172",
                            "value": "Merchant"
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
                            "id": "applepay.b.0173",
                            "value": "Create the purchase"
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
                            "id": "applepay.p.0174",
                            "value": "Your backend calls "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "applepay.code.0175",
                                "value": "POST /purchases/"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "applepay.p.0176",
                            "value": " with "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "applepay.code.0177",
                                "value": "paymentMethod"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "value": " "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "applepay.code.0178",
                                "value": "\"APPLEPAY\""
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "applepay.p.0179",
                            "value": " and receives a "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "applepay.code.0180",
                                "value": "checkout_url"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "applepay.p.0181",
                            "value": ". No Apple Pay payload."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0182",
                        "value": "2"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who m"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0183",
                            "value": "Merchant"
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
                            "id": "applepay.b.0184",
                            "value": "Redirect to checkout_url"
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
                            "id": "applepay.p.0185",
                            "value": "Send the customer to the Paysecure cashier."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0186",
                        "value": "3"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who c"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0187",
                            "value": "Customer"
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
                            "id": "applepay.b.0188",
                            "value": "Taps the Apple Pay button"
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
                            "id": "applepay.p.0189",
                            "value": "Rendered and brand-compliant on Paysecure's side; the payment sheet lists the cards in the customer's Wallet."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0190",
                        "value": "4"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who p"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0191",
                            "value": "Paysecure"
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
                            "id": "applepay.b.0192",
                            "value": "Merchant validation"
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
                            "id": "applepay.p.0193",
                            "value": "Paysecure performs the handshake with Apple over mutual TLS using the Merchant Identity Certificate it holds."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0194",
                        "value": "5"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who c"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0195",
                            "value": "Customer"
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
                            "id": "applepay.b.0196",
                            "value": "Authenticates"
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
                            "id": "applepay.p.0197",
                            "value": "Face ID / Touch ID / passcode; Apple returns the encrypted token to the Paysecure cashier."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0198",
                        "value": "6"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who p"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0199",
                            "value": "Paysecure"
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
                            "id": "applepay.b.0200",
                            "value": "Verify and decrypt"
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
                            "id": "applepay.p.0201",
                            "value": "Paysecure verifies Apple's signature and decrypts the token with the Payment Processing private key it holds."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0202",
                        "value": "7"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who p"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0203",
                            "value": "Paysecure"
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
                            "id": "applepay.b.0204",
                            "value": "Authorise"
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
                            "id": "applepay.p.0205",
                            "value": "Paysecure authorises through the card network; 3-D Secure step-up is handled inline where required."
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
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "seq-row"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "seq-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.div.0206",
                        "value": "8"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {},
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "who m"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.span.0207",
                            "value": "Merchant"
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
                            "id": "applepay.b.0208",
                            "value": "Redirect back + webhook"
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
                            "id": "applepay.p.0209",
                            "value": "The customer returns to your success / pending / failure URL; the final status arrives on your webhook. Treat the webhook, not the redirect, as the source of truth."
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
                      "src": "/assets/applepay-hosted-sequence.png",
                      "alt": "Apple Pay on the Paysecure hosted cashier flow",
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
                    "id": "applepay.figcaption.0210",
                    "value": "Figure 5 · Apple Pay on the Paysecure-hosted cashier: you create the purchase and redirect; Paysecure runs validation, collects and decrypts the token, authorises, and redirects back"
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0211",
                "value": "What this means for you"
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
                        "id": "applepay.b.0212",
                        "value": "No front-end work."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0213",
                    "value": " You do not load Apple Pay JS, render the button, run "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0214",
                        "value": "validateMerchant"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0215",
                    "value": ", or handle "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0216",
                        "value": "onpaymentauthorized"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0217",
                    "value": "; Paysecure does all of it."
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
                        "id": "applepay.b.0218",
                        "value": "No token, no keys, no PCI scope."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0219",
                    "value": " You never receive or decrypt the token; Paysecure holds both private keys."
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
                    "type": "text",
                    "id": "applepay.li.0220",
                    "value": "Your only integration is the Purchases API plus the one-time Apple setup above (Merchant ID, domains, two CSRs)."
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
                    "type": "text",
                    "id": "applepay.li.0221",
                    "value": "Branding compliance is Paysecure's responsibility on the hosted cashier; Apple reviews Paysecure's screenshots."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0222",
                "value": "Branding and UX"
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
                "id": "applepay.p.0223",
                "value": "On the hosted cashier, Paysecure renders the official Apple Pay button via Apple's API, applies the correct marks and naming, gates the button on device capability, and meets Apple's Human Interface and Marketing guidelines. Brand compliance is handled for you, and Apple reviews Paysecure's screenshots. Your only obligations are the ones any merchant has: present Apple Pay only for payment categories Apple permits, and use returned contact data solely to process the transaction."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0224",
                "value": "Scenario matrix"
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
                "id": "applepay.p.0225",
                "value": "Apple Pay always returns a device token; the credential type inside it drives downstream handling. Both are handled transparently by the Paysecure cashier:"
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
                                "id": "applepay.th.0226",
                                "value": "paymentDataType"
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
                                "id": "applepay.th.0227",
                                "value": "Credential"
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
                                "id": "applepay.th.0228",
                                "value": "Notes / ECI"
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
                                    "id": "applepay.code.0229",
                                    "value": "3DSecure"
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
                                "id": "applepay.td.0230",
                                "value": "DPAN + "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0231",
                                    "value": "onlinePaymentCryptogram"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " (+ "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0232",
                                    "value": "eciIndicator"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0233",
                                "value": " sometimes)"
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
                                "id": "applepay.td.0234",
                                "value": "Most networks (Visa, Mastercard, Amex). The cryptogram is a network 3DS cryptogram; ECI is passed through when present"
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
                                    "id": "applepay.code.0235",
                                    "value": "EMV"
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
                                "id": "applepay.td.0236",
                                "value": "DPAN + "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0237",
                                    "value": "emvData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " (+ "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0238",
                                    "value": "encryptedPINData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0239",
                                "value": " where present)"
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
                                "id": "applepay.td.0240",
                                "value": "Regional networks such as China UnionPay / Discover; full EMV payload, no ECI"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0241",
                "value": "Onboarding checklist: what you share with Paysecure"
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
                "id": "applepay.p.0242",
                "value": "Both certificates are created from CSRs Paysecure supplies. You upload them to your Merchant ID, return the issued certificates, and the matching private keys are generated by and never leave Paysecure, so you never hold or send a private key."
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
                                "id": "applepay.th.0243",
                                "value": "Item"
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
                                "id": "applepay.th.0244",
                                "value": "Who creates it"
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
                                "id": "applepay.th.0245",
                                "value": "Shared with Paysecure?"
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
                                "id": "applepay.td.0246",
                                "value": "Apple Developer account & Merchant ID"
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
                                "id": "applepay.td.0247",
                                "value": "You; your own Apple account"
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
                                "id": "applepay.td.0248",
                                "value": "Merchant ID: yes, it is an identifier, not a secret"
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
                                "id": "applepay.td.0249",
                                "value": "Verified Paysecure cashier domains"
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
                                "id": "applepay.td.0250",
                                "value": "You register them (Paysecure provides them)"
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
                                "id": "applepay.td.0251",
                                "value": "Confirm once verified"
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
                                "id": "applepay.td.0252",
                                "value": "Payment Processing Certificate"
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
                                "id": "applepay.td.0253",
                                "value": "Apple issues it from Paysecure's CSR, on your Merchant ID"
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
                                "id": "applepay.td.0254",
                                "value": "Yes; return the issued certificate"
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
                                "id": "applepay.td.0255",
                                "value": "Merchant Identity Certificate"
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
                                "id": "applepay.td.0256",
                                "value": "Apple issues it from Paysecure's CSR, on your Merchant ID"
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
                                "id": "applepay.td.0257",
                                "value": "Yes; return the issued certificate"
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
                                "id": "applepay.td.0258",
                                "value": "Private keys (PPC and MIC)"
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
                                "id": "applepay.td.0259",
                                "value": "Paysecure"
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
                                "id": "applepay.td.0260",
                                "value": "No; generated and held by Paysecure, they never leave us"
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0261",
                    "value": "What Paysecure gives you:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0262",
                "value": " the PPC CSR and MIC CSR to upload to your Merchant ID (public-key requests only, no secrets); the Paysecure cashier domains (Sandbox + Production) to register, with the association file already hosted; your API keys (Sandbox and Production) and your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0263",
                    "value": "brand_id"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0264",
                "value": "; and screenshots of the hosted checkout for your Apple review submission, if needed."
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
                    "type": "text",
                    "id": "applepay.p.0265",
                    "value": "Because Paysecure hosts the cashier, holds both private keys, and runs decryption and merchant validation, you never handle private-key material or Apple Pay JavaScript. Your Apple-side tasks are: create the Merchant ID, register the Paysecure cashier domains, and upload the two CSRs Paysecure sends you."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0266",
                "value": "Alternative: provider decryption"
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
                "id": "applepay.p.0267",
                "value": "Some providers or processors cannot accept a decrypted payload; they require the raw encrypted Apple Pay token and decrypt it themselves inside their own PCI environment. In that case the two certificates belong to the provider but are still registered on "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0268",
                    "value": "your"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0269",
                "value": " Apple Merchant ID. Paysecure relays the CSRs and issued certificates between the provider and you:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ol",
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
                    "type": "text",
                    "id": "applepay.li.0270",
                    "value": "The provider generates the key pairs and the PPC and MIC CSRs, and sends both CSRs to Paysecure."
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
                    "type": "text",
                    "id": "applepay.li.0271",
                    "value": "Paysecure relays both CSRs to you."
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
                    "type": "text",
                    "id": "applepay.li.0272",
                    "value": "You upload both CSRs to your own Apple Merchant ID and download the issued Payment Processing and Merchant Identity certificates."
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
                    "type": "text",
                    "id": "applepay.li.0273",
                    "value": "You return both certificates to Paysecure, which relays them to the provider."
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
                    "type": "text",
                    "id": "applepay.li.0274",
                    "value": "The provider holds both private keys. Apple encrypts the token to the provider's Payment Processing Certificate; the Paysecure cashier collects the encrypted token and forwards it to the provider, which decrypts and authorises. Merchant validation uses the provider's Merchant Identity Certificate."
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
                      "src": "/assets/applepay-provider-decryption.png",
                      "alt": "Provider-decryption relay flow",
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
                    "id": "applepay.figcaption.0275",
                    "value": "Figure 6 · Provider-decryption case: CSRs and certificates are relayed Provider → Paysecure → you → Paysecure → Provider. The provider holds both private keys and decrypts the encrypted token"
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
                "id": "applepay.p.0276",
                "value": "Even in this case the integration is unchanged for you: your own Apple account, the Paysecure-hosted cashier, no Apple Pay JavaScript, and no private key on your side. The only difference is that the keys originate with, and stay with, the provider, with Paysecure acting purely as the relay."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0277",
                "value": "Testing and go-live"
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
                    "type": "text",
                    "id": "applepay.li.0278",
                    "value": "Create an Apple Sandbox tester account and sign in to iCloud with it on a test device; add Apple's test cards to Wallet."
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
                    "type": "text",
                    "id": "applepay.li.0279",
                    "value": "Register and verify the Sandbox Paysecure cashier domain on your Merchant ID; upload the Sandbox CSRs Paysecure provides."
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
                    "type": "text",
                    "id": "applepay.li.0280",
                    "value": "Generate a Sandbox Paysecure API key ('Is Sandbox' ticked) and create a test purchase, then redirect to "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0281",
                        "value": "checkout_url"
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
                                "value": "#"
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
                                "id": "applepay.th.0282",
                                "value": "Test"
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
                                "id": "applepay.th.0283",
                                "value": "Expected"
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
                                "id": "applepay.td.0284",
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
                                "id": "applepay.td.0285",
                                "value": "Apple Pay button on a capable device"
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
                                "id": "applepay.td.0286",
                                "value": "Button appears; absent on a non-capable device"
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
                                "id": "applepay.td.0287",
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
                                "id": "applepay.td.0288",
                                "value": "A "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0289",
                                    "value": "3DSecure"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0290",
                                "value": "-type transaction end to end"
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
                                "id": "applepay.td.0291",
                                "value": "Returns to your success URL with a webhook"
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
                                "id": "applepay.td.0292",
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
                                "id": "applepay.td.0293",
                                "value": "Customer cancels on the sheet"
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
                                "id": "applepay.td.0294",
                                "value": "Returns to your failure / pending URL as expected"
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
                                "id": "applepay.td.0295",
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
                                "id": "applepay.td.0296",
                                "value": "Duplicate submit via "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0297",
                                    "value": "merchantRef"
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
                                "id": "applepay.td.0298",
                                "value": "Second purchase rejected as duplicate"
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0299",
                    "value": "Go-live:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0300",
                "value": " production Paysecure cashier domain verified on your Merchant ID; production PPC and MIC issued from Paysecure's CSRs and returned; production API key in place ('Is Sandbox' unticked) with webhooks reachable over HTTPS; Apple review (if required for your account) completed using Paysecure's hosted-cashier screenshots."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0301",
                "value": "Errors"
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
                                "id": "applepay.th.0302",
                                "value": "Symptom"
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
                                "id": "applepay.th.0303",
                                "value": "Likely cause & fix"
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
                                "id": "applepay.td.0304",
                                "value": "Apple Pay button not shown on the cashier"
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
                                "id": "applepay.td.0305",
                                "value": "Customer's device / browser is not Apple Pay-capable, or the Paysecure cashier domain is not yet verified on your Merchant ID"
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
                                "id": "applepay.td.0306",
                                "value": "Merchant validation fails on the cashier"
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
                                "id": "applepay.td.0307",
                                "value": "Paysecure cashier domain not verified, or the Merchant Identity Certificate has not been returned to Paysecure"
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
                                "id": "applepay.td.0308",
                                "value": "Decryption / authorisation fails"
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
                                "id": "applepay.td.0309",
                                "value": "Payment Processing Certificate not yet returned to Paysecure, or expired (25-month limit); Paysecure re-issues a CSR for rotation"
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
                                "id": "applepay.td.0310",
                                "value": "No webhook received"
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
                                "id": "applepay.td.0311",
                                "value": "Check "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0312",
                                    "value": "success_callback"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " / "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0313",
                                    "value": "failure_callback"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0314",
                                "value": " URLs are reachable over HTTPS and return 2xx"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0315",
                "value": "FAQ"
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
                    "id": "applepay.b.0316",
                    "value": "Do I need to write any Apple Pay JavaScript?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0317",
                "value": " No. On the hosted cashier Paysecure renders the button, runs "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0318",
                    "value": "validateMerchant"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0319",
                "value": ", and handles the token. You only call "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0320",
                    "value": "POST /purchases/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0321",
                "value": " and redirect to "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0322",
                    "value": "checkout_url"
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
                    "id": "applepay.b.0323",
                    "value": "Whose Apple account is used?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0324",
                "value": " Yours. Paysecure has no Apple Developer account and never uses a processor's or PSP's account. Every certificate is registered against your Merchant ID."
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
                    "id": "applepay.b.0325",
                    "value": "Do I ever hold a private key?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0326",
                "value": " No. Paysecure supplies the CSRs for both certificates and keeps both private keys; you only upload the CSRs and return the issued certificates."
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
                    "id": "applepay.b.0327",
                    "value": "Why register Paysecure's domain instead of mine?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0328",
                "value": " Apple issues tokens only to the domain serving the Apple Pay button. Since that button is on the Paysecure cashier, the Paysecure cashier domain must be verified on your Merchant ID; Paysecure hosts the association file for you."
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
                    "id": "applepay.b.0329",
                    "value": "Does Apple Pay have a PAN_ONLY mode like Google Pay?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0330",
                "value": " No. Apple Pay always returns a device token (DPAN) with a per-transaction cryptogram, effectively "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0331",
                    "value": "CRYPTOGRAM_3DS"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0332",
                "value": " every time."
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
              "id": "merchant-cashier"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.merchant-cashier.0333",
                "value": "Apple Pay on your merchant cashier"
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
                "id": "applepay.p.0334",
                "value": "You host the Apple Pay button, the Apple Pay JS, and the brand presentation on your own cashier page using your own Apple Developer account and Merchant ID; Paysecure handles authorisation, routing, and settlement across our processor and acquirer network. In every case the Apple Pay payload travels to Paysecure inside "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0335",
                    "value": "extraParam.applepay_param"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0336",
                "value": " of the standard purchase call; see the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-applepay"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.doclink.0337",
                    "value": "Apple Pay API reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0338",
                "value": ". Written for engineering teams building the cashier front end and backend teams integrating the Purchases API; working knowledge of REST APIs, JavaScript, and TLS/PKI assumed."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0339",
                "value": "Division of responsibilities"
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
                                "id": "applepay.th.0340",
                                "value": "Responsibility"
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
                                "id": "applepay.th.0341",
                                "value": "You (merchant)"
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
                                "id": "applepay.th.0342",
                                "value": "Paysecure"
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
                                "id": "applepay.td.0343",
                                "value": "Cashier page, Apple Pay JS, button & branding"
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
                                "id": "applepay.td.0344",
                                "value": "Yes; your own cashier and Apple Developer account"
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
                                "id": "applepay.td.0345",
                                "value": "Integration support"
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
                                "id": "applepay.td.0346",
                                "value": "Apple Developer Program, Merchant ID, domain verification, Apple review"
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
                                "id": "applepay.td.0347",
                                "value": "Yes"
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
                                "id": "applepay.td.0348",
                                "value": "Guidance and (optionally) a CSR / processor parameters"
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
                                "id": "applepay.td.0349",
                                "value": "Merchant validation ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0350",
                                    "value": "validateMerchant"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0351",
                                "value": ", mutual TLS)"
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
                                "id": "applepay.td.0352",
                                "value": "Yes; using your Merchant Identity Certificate (default)"
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
                                "id": "applepay.td.0353",
                                "value": "Optional; Paysecure can run validation on your behalf"
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
                                "id": "applepay.td.0354",
                                "value": "Token decryption: Paysecure decryption"
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
                                "id": "applepay.td.0355",
                                "value": "No; forward the encrypted token"
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
                                "id": "applepay.td.0356",
                                "value": "Yes; inside Paysecure's (or the assigned processor's) PCI zone"
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
                                "id": "applepay.td.0357",
                                "value": "Token decryption: merchant decryption"
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
                                "id": "applepay.td.0358",
                                "value": "Yes; your private key, your servers"
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
                                "id": "applepay.td.0359",
                                "value": "No; receives the decrypted credential"
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
                                "id": "applepay.td.0360",
                                "value": "Authorisation, routing, captures, refunds, webhooks"
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
                                "id": "applepay.td.0361",
                                "value": "Consumes API"
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
                                "id": "applepay.td.0362",
                                "value": "Yes"
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
                                "id": "applepay.td.0363",
                                "value": "PCI DSS compliance for card data"
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
                                "id": "applepay.td.0364",
                                "value": "Minimal (Paysecure decryption) / Full SAQ D (merchant decryption)"
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
                                "id": "applepay.td.0365",
                                "value": "PCI DSS Level 1"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0366",
                "value": "Choosing your flow"
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
                "id": "applepay.p.0367",
                "value": "Three operating combinations are available. They differ only in who holds the Payment Processing Certificate private key and what you submit to Paysecure; the cashier JavaScript and the Purchases API envelope stay the same."
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
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "applepay.th.0368",
                                "value": "Paysecure decryption, your cert"
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
                                "id": "applepay.th.0369",
                                "value": "Paysecure decryption, Paysecure CSR"
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
                                "id": "applepay.th.0370",
                                "value": "Merchant decryption"
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
                                    "id": "applepay.b.0371",
                                    "value": "Token encrypted to"
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
                                "id": "applepay.td.0372",
                                "value": "Your Payment Processing Certificate"
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
                                "id": "applepay.td.0373",
                                "value": "A certificate built from Paysecure's CSR"
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
                                "id": "applepay.td.0374",
                                "value": "Your Payment Processing Certificate"
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
                                    "id": "applepay.b.0375",
                                    "value": "Who decrypts"
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
                                "id": "applepay.td.0376",
                                "value": "Paysecure, in our PCI zone"
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
                                "id": "applepay.td.0377",
                                "value": "Paysecure (key never leaves us)"
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
                                "id": "applepay.td.0378",
                                "value": "You, on your servers"
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
                                    "id": "applepay.b.0379",
                                    "value": "You send Paysecure"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0380",
                                    "value": "applepay_encrypted_payload"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0381",
                                    "value": "applepay_encrypted_payload"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0382",
                                    "value": "applepay_decrypted_payload"
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
                                    "id": "applepay.b.0383",
                                    "value": "Key handling for you"
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
                                "id": "applepay.td.0384",
                                "value": "Generate key pair + cert; share private key with Paysecure; rotate"
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
                                "id": "applepay.td.0385",
                                "value": "Upload Paysecure's CSR to your Merchant ID; no key material to hold"
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
                                "id": "applepay.td.0386",
                                "value": "Generate, register, protect & rotate the key yourself"
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
                                    "id": "applepay.b.0387",
                                    "value": "PCI DSS impact"
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
                                "id": "applepay.td.0388",
                                "value": "Reduced; you never hold the PAN"
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
                                "id": "applepay.td.0389",
                                "value": "Reduced; you never hold the PAN or the key"
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
                                "id": "applepay.td.0390",
                                "value": "Full; SAQ D"
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
                                    "id": "applepay.b.0391",
                                    "value": "Engineering effort"
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
                                "id": "applepay.td.0392",
                                "value": "Low + key ceremony"
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
                                "id": "applepay.td.0393",
                                "value": "Lowest"
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
                                "id": "applepay.td.0394",
                                "value": "High; signature verify + ECIES decrypt"
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
                        "id": "applepay.b.0395",
                        "value": "A fourth variant:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0396",
                    "value": " when your Paysecure brand is pinned to a specific processor (e.g. Paysafe, Shift4, PayNearMe), that processor's Payment Processing Certificate is registered against your Merchant ID and the processor decrypts the token in its own PCI zone. Operationally this is identical to the Paysecure CSR case (you forward the encrypted token and never hold a key), except the decrypting party is the processor. Paysecure tells you at onboarding whether your brand uses a processor certificate."
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
                        "id": "applepay.b.0397",
                        "value": "Paysecure recommendation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0398",
                    "value": " most merchants should choose Paysecure decryption with a Paysecure-supplied CSR: lowest engineering effort, no key material on your side, no PAN exposure, and routing stays flexible. Choose merchant decryption only if you already run a PCI SAQ D environment and need the raw credential."
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0399",
                "value": "Flow 1: Paysecure decryption (encrypted submission)"
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
                      "src": "/assets/applepay-merchant-encrypted.png",
                      "alt": "Paysecure decryption, encrypted submission flow",
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
                    "id": "applepay.figcaption.0400",
                    "value": "Figure 7 · Paysecure decryption (encrypted submission): your cashier forwards the encrypted token; Paysecure (or the assigned processor) decrypts in its PCI zone. You never see card data"
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
            "tag": "ol",
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
                    "type": "text",
                    "id": "applepay.li.0401",
                    "value": "The customer taps the Apple Pay button on your cashier; your page creates an "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0402",
                        "value": "ApplePaySession"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0403",
                    "value": " and Apple fires "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0404",
                        "value": "onvalidatemerchant"
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
                    "type": "text",
                    "id": "applepay.li.0405",
                    "value": "Your validation service (yours or Paysecure's) requests a merchant session from Apple over mutual TLS using the Merchant Identity Certificate, and you call "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0406",
                        "value": "session.completeMerchantValidation()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0407",
                    "value": " with the returned session object."
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
                    "type": "text",
                    "id": "applepay.li.0408",
                    "value": "The customer picks a card and authenticates (Face ID / Touch ID / passcode). Apple fires "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0409",
                        "value": "onpaymentauthorized"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0410",
                    "value": " with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0411",
                        "value": "event.payment.token"
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
                    "type": "text",
                    "id": "applepay.li.0412",
                    "value": "Apple has encrypted the credential to the Payment Processing Certificate registered against your Merchant ID (yours-shared, Paysecure's, or the processor's). The token's payment data is opaque to you."
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
                    "type": "text",
                    "id": "applepay.li.0413",
                    "value": "Your cashier posts the token to your backend over HTTPS. Do not parse, re-encode, reformat, or otherwise modify the payment data."
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
                    "type": "text",
                    "id": "applepay.li.0414",
                    "value": "Your backend calls "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0415",
                        "value": "POST /purchases/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0416",
                    "value": " with the payment data verbatim in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0417",
                        "value": "extraParam.applepay_param.applepay_encrypted_payload"
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
                    "type": "text",
                    "id": "applepay.li.0418",
                    "value": "Paysecure (or the assigned processor) verifies Apple's signature chain, decrypts the credential inside a PCI zone, and authorises through the card network. You call "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0419",
                        "value": "session.completePayment()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0420",
                    "value": " with the result."
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
                    "type": "text",
                    "id": "applepay.li.0421",
                    "value": "Paysecure returns the purchase result and fires your webhook; you show the confirmation page."
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
                    "id": "applepay.b.0422",
                    "value": "Certificate case A, your certificate shared with Paysecure:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0423",
                "value": " you generate the EC key pair and CSR, upload the CSR to your Merchant ID, download the Payment Processing Certificate, then share the certificate and its private key with Paysecure through the secure channel agreed at onboarding. Apple encrypts to your certificate; Paysecure decrypts with the key you shared. Rotate the key before each 25-month expiry and re-share the new key."
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
                    "id": "applepay.b.0424",
                    "value": "Certificate case B, Paysecure-supplied CSR (recommended):"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0425",
                "value": " Paysecure generates the EC key pair and the CSR and sends you only the CSR (public key, not the private key). You upload it to your Merchant ID and download the resulting certificate, which you return to Paysecure. Apple encrypts to that certificate; Paysecure decrypts with the private key it never released. No private-key material ever leaves Paysecure, the cleanest custody model."
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
                    "type": "text",
                    "id": "applepay.p.0426",
                    "value": "The processor-decryption variant works exactly like case B, except the CSR comes from the assigned processor and the processor holds the private key. You still only upload a CSR and forward the encrypted token."
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
                    "id": "applepay.b.0427",
                    "value": "What you must never do with the token:"
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
                    "type": "text",
                    "id": "applepay.li.0428",
                    "value": "Never log the payment data in full. Log a SHA-256 hash or the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0429",
                        "value": "header.transactionId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0430",
                    "value": " for correlation, not the encrypted blob."
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
                    "type": "text",
                    "id": "applepay.li.0431",
                    "value": "Never store it; the token is single-use and short-lived."
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
                    "type": "text",
                    "id": "applepay.li.0432",
                    "value": "Never attempt to decrypt or inspect it in this flow; you do not hold the key, only Paysecure or the processor does."
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
                    "type": "text",
                    "id": "applepay.li.0433",
                    "value": "Submit it promptly. The merchant session expires five minutes after creation and tokens are short-lived; treat a stale token as invalid and ask the customer to retry."
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0434",
                "value": "Flow 2: Merchant decryption (decrypted submission)"
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
                      "src": "/assets/applepay-merchant-decrypted.png",
                      "alt": "Merchant decryption, decrypted submission flow",
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
                    "id": "applepay.figcaption.0435",
                    "value": "Figure 8 · Merchant decryption (decrypted submission): you hold the Payment Processing Certificate private key, decrypt on your servers, and send the decrypted payload to Paysecure"
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
            "tag": "ol",
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
                    "type": "text",
                    "id": "applepay.li.0436",
                    "value": "Steps 1 to 4 are identical to Flow 1: validate the merchant, the customer authenticates, and Apple returns the encrypted token, encrypted to your Payment Processing Certificate."
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
                    "type": "text",
                    "id": "applepay.li.0437",
                    "value": "Your backend verifies Apple's signature chain and decrypts the payment data with your private key, inside your PCI SAQ D environment."
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
                    "type": "text",
                    "id": "applepay.li.0438",
                    "value": "Your backend calls "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0439",
                        "value": "POST /purchases/"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0440",
                    "value": " with the decrypted message in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0441",
                        "value": "extraParam.applepay_param.applepay_decrypted_payload"
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
                    "type": "text",
                    "id": "applepay.li.0442",
                    "value": "Paysecure authorises and routes through our network exactly as for any purchase, returns the result, and fires your webhook."
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0443",
                "value": "Generate and register your Payment Processing Certificate"
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
                "id": "applepay.p.0444",
                "value": "Apple Pay on the web uses an EC key pair on curve NIST P-256 ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0445",
                    "value": "prime256v1"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0446",
                "value": ") for the Payment Processing Certificate. Generate it on a secured machine, ideally inside the HSM/KMS that will hold it."
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0447",
                        "value": "Payment Processing Certificate: key + CSR"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0448",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0449",
                        "value": "# 1 · Generate the EC private key (keep this secret)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0450",
                    "value": "\nopenssl ecparam -name prime256v1 -genkey -noout -out payment_processing.key\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0451",
                        "value": "# 2 · Create a CSR to upload to your Merchant ID"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0452",
                    "value": "\nopenssl req -new -sha256 -key payment_processing.key \\\n  -out payment_processing.csr \\\n  -subj "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0453",
                        "value": "\"/CN=Apple Pay Payment Processing/O=Your Company/C=MT\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0454",
                        "value": "# 3 · Upload payment_processing.csr in your Merchant ID ->"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0455",
                        "value": "#     Apple Pay Payment Processing Certificate -> Create Certificate,"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0456",
                        "value": "#     then download the issued certificate (apple_pay.cer)."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0457",
                        "value": "# 4 · Convert to PEM for your decryption library"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0458",
                    "value": "\nopenssl x509 -inform DER -in apple_pay.cer -out payment_processing.pem"
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
                "id": "applepay.p.0459",
                "value": "The Payment Processing Certificate is referenced only on the decrypting side. Unlike Google Pay DIRECT, you do not paste a public key into your cashier JavaScript; Apple looks up the certificate by your Merchant ID at token time."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0460",
                "value": "Key management and rotation"
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
                        "id": "applepay.b.0461",
                        "value": "Storage:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0462",
                    "value": " hold the private key in an HSM or cloud KMS; never in source control, config files, or container images."
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
                        "id": "applepay.b.0463",
                        "value": "Expiry:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0464",
                    "value": " the Payment Processing Certificate expires every 25 months. Diarise rotation at least a month ahead."
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
                        "id": "applepay.b.0465",
                        "value": "Rotation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0466",
                    "value": " create a new certificate from a fresh CSR, add it to your Merchant ID alongside the old one, deploy the new private key to your decryption service, run both in parallel, then revoke and retire the old certificate."
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
                        "id": "applepay.b.0467",
                        "value": "Compromise:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0468",
                    "value": " if a private key may be exposed, revoke the certificate in your Merchant ID immediately, rotate, and notify Paysecure."
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
                        "id": "applepay.b.0469",
                        "value": "Per-environment keys:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0470",
                    "value": " use separate certificates for Sandbox and Production."
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0471",
                "value": "Verify and decrypt the token (EC_v1)"
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
                "id": "applepay.p.0472",
                "value": "The token your cashier receives in "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0473",
                    "value": "event.payment.token.paymentData"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0474",
                "value": " has this shape:"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0475",
                        "value": "Apple Pay token (EC_v1)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0476",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "{\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0477",
                        "value": "\"version\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0478",
                        "value": "\"EC_v1\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0479",
                        "value": "\"data\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0480",
                        "value": "\"BASE64_AES_256_GCM_CIPHERTEXT...\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0481",
                        "value": "\"signature\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0482",
                        "value": "\"BASE64_CMS_DETACHED_SIGNATURE...\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0483",
                        "value": "\"header\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0484",
                        "value": "\"ephemeralPublicKey\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0485",
                        "value": "\"BASE64_P256_EPHEMERAL_PUBLIC_KEY...\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0486",
                        "value": "\"publicKeyHash\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0487",
                        "value": "\"BASE64_SHA256_OF_YOUR_CERT_PUBLIC_KEY...\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0488",
                        "value": "\"transactionId\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0489",
                        "value": "\"1a2b3c...\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  }\n}"
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
                "id": "applepay.p.0490",
                "value": "Your backend must perform all of the following, in order; skipping any step is a security defect:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "ol",
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
                        "id": "applepay.b.0491",
                        "value": "Verify the signature."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0492",
                    "value": " Confirm the CMS/PKCS#7 detached signature chains to Apple's root CA via Apple's Apple Pay intermediate and leaf certificates, that the signing time is recent, and that the signature covers the concatenation of "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0493",
                        "value": "ephemeralPublicKey"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " + "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0494",
                        "value": "data"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " + "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0495",
                        "value": "transactionId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " (+ "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0496",
                        "value": "applicationData"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0497",
                    "value": " for in-app)."
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
                        "id": "applepay.b.0498",
                        "value": "Confirm the recipient."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0499",
                        "value": "header.publicKeyHash"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0500",
                    "value": " must equal the SHA-256 of the public key in your Payment Processing Certificate; this proves the token was encrypted to your certificate."
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
                        "id": "applepay.b.0501",
                        "value": "Derive the shared secret."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0502",
                    "value": " Run ECDH between "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0503",
                        "value": "header.ephemeralPublicKey"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0504",
                    "value": " and your certificate's private key."
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
                        "id": "applepay.b.0505",
                        "value": "Derive the symmetric key."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0506",
                    "value": " Apply the NIST SP 800-56A KDF (single-step, SHA-256) with the algorithm ID and your Merchant ID as the party-V info."
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
                        "id": "applepay.b.0507",
                        "value": "Decrypt."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0508",
                    "value": " AES-256-GCM decrypt "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0509",
                        "value": "data"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0510",
                    "value": " (the GCM tag is appended) to recover the cleartext payload."
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
                        "id": "applepay.b.0511",
                        "value": "Validate freshness."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0512",
                    "value": " Use "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0513",
                        "value": "transactionId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0514",
                    "value": " for idempotency / replay detection and reject tokens older than your freshness window."
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
                        "id": "applepay.b.0515",
                        "value": "Do not hand-roll the cryptography."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0516",
                    "value": " Use a maintained Apple Pay decryption library (for example the apple-pay-decrypt family for Node, the processout/applepay Go library, or your processor's SDK) and feed it your private key and certificate. These implement the signature chain and ECIES/KDF/AES-GCM correctly and handle certificate rotation."
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0517",
                "value": "The decrypted payload"
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
                "id": "applepay.p.0518",
                "value": "The decrypted message is what you submit verbatim as "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0519",
                    "value": "applepay_decrypted_payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0520",
                "value": ". A typical "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0521",
                    "value": "3DSecure"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0522",
                "value": " payload:"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0523",
                        "value": "Decrypted payload (3DSecure)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0524",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "{\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0525",
                        "value": "\"applicationPrimaryAccountNumber\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0526",
                        "value": "\"4895370012003478\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",   "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0527",
                        "value": "// DPAN, not the real card"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0528",
                        "value": "\"applicationExpirationDate\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0529",
                        "value": "\"271231\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",                    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0530",
                        "value": "// YYMMDD"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0531",
                        "value": "\"currencyCode\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0532",
                        "value": "\"978\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",                                    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0533",
                        "value": "// ISO 4217 numeric (EUR)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0534",
                        "value": "\"transactionAmount\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0535",
                        "value": "10499"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",                               "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0536",
                        "value": "// minor units"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0537",
                        "value": "\"deviceManufacturerIdentifier\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0538",
                        "value": "\"040010030273\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0539",
                        "value": "\"paymentDataType\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0540",
                        "value": "\"3DSecure\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0541",
                        "value": "\"paymentData\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0542",
                        "value": "\"onlinePaymentCryptogram\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0543",
                        "value": "\"Ah0A8Jd...AAADFA==\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0544",
                        "value": "\"eciIndicator\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0545",
                        "value": "\"5\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  }\n}"
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
                                "id": "applepay.th.0546",
                                "value": "Field"
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
                                "id": "applepay.th.0547",
                                "value": "Type"
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
                                "id": "applepay.th.0548",
                                "value": "Notes"
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
                                    "id": "applepay.code.0549",
                                    "value": "applicationPrimaryAccountNumber"
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
                                "id": "applepay.td.0550",
                                "value": "String"
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
                                "id": "applepay.td.0551",
                                "value": "Device account number (DPAN), not the funding PAN. PCI account data; protect accordingly"
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
                                    "id": "applepay.code.0552",
                                    "value": "applicationExpirationDate"
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
                                "id": "applepay.td.0553",
                                "value": "String"
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
                                "id": "applepay.td.0554",
                                "value": "DPAN expiry in "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0555",
                                    "value": "YYMMDD"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0556",
                                "value": " (can differ from the plastic card)"
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
                                    "id": "applepay.code.0557",
                                    "value": "currencyCode"
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
                                "id": "applepay.td.0558",
                                "value": "String"
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
                                "id": "applepay.td.0559",
                                "value": "ISO 4217 numeric currency code"
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
                                    "id": "applepay.code.0560",
                                    "value": "transactionAmount"
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
                                "id": "applepay.td.0561",
                                "value": "Number"
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
                                "id": "applepay.td.0562",
                                "value": "Amount in minor units as authorised by the device"
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
                                    "id": "applepay.code.0563",
                                    "value": "deviceManufacturerIdentifier"
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
                                "id": "applepay.td.0564",
                                "value": "String"
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
                                "id": "applepay.td.0565",
                                "value": "Identifies the device family; pass through unchanged"
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
                                    "id": "applepay.code.0566",
                                    "value": "paymentDataType"
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
                                "id": "applepay.td.0567",
                                "value": "String"
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
                                    "id": "applepay.code.0568",
                                    "value": "3DSecure"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0569",
                                "value": " or "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0570",
                                    "value": "EMV"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0571",
                                "value": "; drives which credential fields are present"
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
                                    "id": "applepay.code.0572",
                                    "value": "paymentData.onlinePaymentCryptogram"
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
                                "id": "applepay.td.0573",
                                "value": "String"
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
                                    "id": "applepay.code.0574",
                                    "value": "3DSecure"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0575",
                                "value": " only. Single-use network cryptogram (e.g. Visa TAVV); must reach the network unaltered"
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
                                    "id": "applepay.code.0576",
                                    "value": "paymentData.eciIndicator"
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
                                "id": "applepay.td.0577",
                                "value": "String"
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
                                    "id": "applepay.code.0578",
                                    "value": "3DSecure"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0579",
                                "value": " only, and not always present. Pass through exactly as received; never synthesise a value"
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
                                    "id": "applepay.code.0580",
                                    "value": "paymentData.emvData / encryptedPINData"
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
                                "id": "applepay.td.0581",
                                "value": "String"
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
                                    "id": "applepay.code.0582",
                                    "value": "EMV"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0583",
                                    "value": "paymentDataType"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0584",
                                "value": " only; forward verbatim"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0585",
                "value": "Building your cashier: Apple Pay JS"
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
                "id": "applepay.p.0586",
                "value": "You render Apple Pay on your own cashier with Apple's Apple Pay JS API (Safari and other Apple Pay-capable browsers on Apple hardware), served over HTTPS from a verified domain. The cryptographic flow is the same for all three decryption models; only what your backend does with the returned token differs. Full reference: "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0587",
                    "value": "developer.apple.com/documentation/apple_pay_on_the_web"
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0588",
                "value": "Feature detection and the Apple Pay button"
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
                "id": "applepay.p.0589",
                "value": "Show the Apple Pay button only when the device can pay. Apple provides the button as a CSS-styled element or as the Apple Pay JS button web component; never build your own artwork. Use the web component where you can load Apple's SDK script; use the CSS-styled appearance when you cannot load external scripts on the page."
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0590",
                        "value": "Rendering the button"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0591",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0592",
                        "value": "<!-- Option A: Apple Pay button web component (recommended) -->"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0593",
                    "value": "\n<script crossorigin src="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0594",
                        "value": "\"https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0595",
                    "value": "></script>\n<apple-pay-button buttonstyle="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0596",
                        "value": "\"black\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0597",
                    "value": " type="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0598",
                        "value": "\"buy\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0599",
                    "value": " locale="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0600",
                        "value": "\"en-US\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0601",
                    "value": "\n  onclick="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0602",
                        "value": "\"onApplePayClicked()\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0603",
                    "value": "></apple-pay-button>\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0604",
                        "value": "<!-- Option B: CSS-styled button (no SDK script needed) -->"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0605",
                    "value": "\n<style>\n  .apple-pay-button {\n    display: inline-block; -webkit-appearance: -apple-pay-button;\n    apple-pay-button-type: buy; apple-pay-button-style: black;\n  }\n</style>\n<div class="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0606",
                        "value": "\"apple-pay-button\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0607",
                    "value": " onclick="
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0608",
                        "value": "\"onApplePayClicked()\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0609",
                    "value": "></div>\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0610",
                        "value": "// Only reveal the button if Apple Pay is available on this device"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0611",
                        "value": "if"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0612",
                    "value": " (window.ApplePaySession && ApplePaySession.canMakePayments()) {\n  document.querySelector("
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0613",
                        "value": "\"apple-pay-button\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0614",
                    "value": ").style.display = "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0615",
                        "value": "\"inline-block\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ";\n}"
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0616",
                "value": "Create the session and payment request"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0617",
                        "value": "Payment request + session"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0618",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0619",
                        "value": "function"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0620",
                    "value": " onApplePayClicked() {\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0621",
                        "value": "const"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0622",
                    "value": " paymentRequest = {\n    countryCode: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0623",
                        "value": "\"MT\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0624",
                    "value": ",\n    currencyCode: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0625",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0626",
                    "value": ",\n    merchantCapabilities: ["
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0627",
                        "value": "\"supports3DS\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "],            "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0628",
                        "value": "// required"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0629",
                    "value": "\n    supportedNetworks: ["
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0630",
                        "value": "\"visa\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0631",
                        "value": "\"masterCard\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0632",
                        "value": "\"amex\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0633",
                    "value": "],\n    total: { label: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0634",
                        "value": "\"Your Store Name\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0635",
                    "value": ", amount: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0636",
                        "value": "\"104.99\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0637",
                    "value": ", type: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0638",
                        "value": "\"final\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0639",
                    "value": " },\n    requiredBillingContactFields: ["
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0640",
                        "value": "\"postalAddress\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0641",
                        "value": "\"name\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "]\n  };\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0642",
                        "value": "// Use a current API version your browser supports (e.g. 3..14)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0643",
                        "value": "const"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0644",
                    "value": " session = "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0645",
                        "value": "new"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0646",
                    "value": " ApplePaySession("
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-n"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0647",
                        "value": "3"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0648",
                    "value": ", paymentRequest);\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0649",
                        "value": "// ... attach handlers (validation, authorization) ..."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0650",
                    "value": "\n  session.begin();   "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0651",
                        "value": "// must be called from the user-gesture handler"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n}"
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0652",
                "value": "Merchant validation: onvalidatemerchant"
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
                "id": "applepay.p.0653",
                "value": "As soon as the payment sheet appears, Apple calls "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0654",
                    "value": "onvalidatemerchant"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0655",
                "value": " with a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0656",
                    "value": "validationURL"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0657",
                "value": ". You must request a merchant session from your server, never from the browser, over mutual TLS using the Merchant Identity Certificate, then hand the opaque session back to Apple. The merchant session is single-use and expires five minutes after creation."
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
                      "src": "/assets/applepay-merchant-validation.png",
                      "alt": "Merchant validation handshake",
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
                    "id": "applepay.figcaption.0658",
                    "value": "Figure 9 · Merchant validation handshake (applies to all flows). The validation server may be yours or Paysecure's"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0659",
                        "value": "onvalidatemerchant (browser)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0660",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.pre.0661",
                    "value": "session.onvalidatemerchant = (event) => {\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0662",
                        "value": "// Send event.validationURL to YOUR backend (or Paysecure's endpoint)."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0663",
                    "value": "\n  fetch("
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0664",
                        "value": "\"/cashier/applepay/validate\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0665",
                    "value": ", {\n    method: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0666",
                        "value": "\"POST\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0667",
                    "value": ",\n    headers: { "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0668",
                        "value": "\"Content-Type\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0669",
                        "value": "\"application/json\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0670",
                    "value": " },\n    body: JSON.stringify({ validationURL: event.validationURL,\n                           domain: window.location.hostname })\n  })\n  .then(r => r.json())\n  .then(merchantSession => session.completeMerchantValidation(merchantSession))\n  .catch(err => session.abort());\n};"
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
                "id": "applepay.p.0671",
                "value": "Who runs the validation call (both options supported):"
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
                        "id": "applepay.b.0672",
                        "value": "You run it (default for the merchant cashier)."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0673",
                    "value": " Your backend POSTs to "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0674",
                        "value": "event.validationURL"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0675",
                    "value": " with mutual TLS presenting your Merchant Identity Certificate, and a JSON body containing "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0676",
                        "value": "merchantIdentifier"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0677",
                        "value": "displayName"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0678",
                        "value": "initiative"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0679",
                    "value": " \"web\", and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0680",
                        "value": "initiativeContext"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0681",
                    "value": " set to your cashier domain. Apple returns the merchant session, which you relay to the browser."
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
                        "id": "applepay.b.0682",
                        "value": "Paysecure runs it."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0683",
                    "value": " Your cashier calls a Paysecure validation endpoint instead; Paysecure performs the mutual-TLS call to Apple using a Merchant Identity Certificate (Paysecure's, registered against your Merchant ID, or yours shared at onboarding) and returns the merchant session. No identity-certificate handling on your servers."
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
                "id": "applepay.p.0684",
                "value": "If you run validation yourself, create the Merchant Identity Certificate first: generate an RSA 2048 key and CSR, upload the CSR under Apple Pay Merchant Identity Certificate in your Merchant ID, then convert Apple's issued certificate into the format your validation service needs."
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0685",
                        "value": "Merchant Identity Certificate: key + CSR + bundle"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0686",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0687",
                        "value": "# Generate an RSA 2048 key + CSR for the Merchant Identity Certificate"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0688",
                    "value": "\nopenssl req -new -newkey rsa:2048 -nodes \\\n  -keyout merchant_identity.key \\\n  -out merchant_identity.csr \\\n  -subj "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0689",
                        "value": "\"/CN=merchant.com.yourcompany.store/O=Your Company/C=MT\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n\n"
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0690",
                        "value": "# After downloading Apple's certificate (merchant_id.cer), build a PEM pair / .p12"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0691",
                    "value": "\nopenssl x509 -inform DER -in merchant_id.cer -out merchant_identity.pem\nopenssl pkcs12 -export -out merchant_identity.p12 \\\n  -inkey merchant_identity.key -in merchant_identity.pem"
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0692",
                        "value": "Server-side validateMerchant (you-run case)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0693",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.pre.0694",
                    "value": "curl --cert merchant_identity.pem --key merchant_identity.key \\\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0695",
                        "value": "-H"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0696",
                        "value": "\"Content-Type: application/json\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " \\\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0697",
                        "value": "-d"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0698",
                        "value": "'{\"merchantIdentifier\":\"merchant.com.yourcompany.store\",\n       \"displayName\":\"Your Store Name\",\n       \"initiative\":\"web\",\n       \"initiativeContext\":\"checkout.yourcompany.com\"}'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " \\\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0699",
                        "value": "\"$VALIDATION_URL\""
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
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0700",
                "value": "Payment authorization: onpaymentauthorized"
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
                "id": "applepay.p.0701",
                "value": "After the customer authenticates, Apple fires "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0702",
                    "value": "onpaymentauthorized"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0703",
                "value": " with the token. Forward the token's payment data to your backend; for merchant decryption, decrypt it first. Then complete the sheet with the result."
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
              "className": "code"
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
                  "className": "code-head"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "fname"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0704",
                        "value": "onpaymentauthorized (browser)"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "button",
                    "props": {
                      "className": "code-copy"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.button.0705",
                        "value": "Copy"
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
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.pre.0706",
                    "value": "session.onpaymentauthorized = (event) => {\n  "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0707",
                        "value": "const"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0708",
                    "value": " token = event.payment.token;        "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0709",
                        "value": "// contains paymentData + paymentMethod"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0710",
                    "value": "\n  fetch("
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0711",
                        "value": "\"/cashier/applepay/pay\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0712",
                    "value": ", {\n    method: "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0713",
                        "value": "\"POST\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0714",
                    "value": ",\n    headers: { "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0715",
                        "value": "\"Content-Type\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-s"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0716",
                        "value": "\"application/json\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " },\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0717",
                        "value": "// Forward token.paymentData verbatim (encrypted-submission flow)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0718",
                    "value": "\n    body: JSON.stringify({ token })\n  })\n  .then(r => r.json())\n  .then(result => {\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-k"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0719",
                        "value": "const"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0720",
                    "value": " status = result.ok\n      ? ApplePaySession.STATUS_SUCCESS\n      : ApplePaySession.STATUS_FAILURE;\n    session.completePayment({ status });\n    "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0721",
                        "value": "// then redirect / show confirmation based on the Paysecure response"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.pre.0722",
                    "value": "\n  });\n};\nsession.oncancel = () => { "
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {
                      "className": "tok-c"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.span.0723",
                        "value": "/* customer dismissed the sheet */"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " };"
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
                    "type": "text",
                    "id": "applepay.p.0724",
                    "value": "For the encrypted-submission flow, your backend sends "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0725",
                        "value": "token.paymentData"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0726",
                    "value": " (the object with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0727",
                        "value": "version"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0728",
                        "value": "data"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0729",
                        "value": "signature"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ", "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0730",
                        "value": "header"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0731",
                    "value": ") to Paysecure verbatim as "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0732",
                        "value": "applepay_encrypted_payload"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0733",
                    "value": ". For merchant decryption, your backend decrypts it and sends the decrypted message as "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0734",
                        "value": "applepay_decrypted_payload"
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
              }
            ]
          },
          {
            "type": "text",
            "value": "\n      "
          },
          {
            "type": "element",
            "tag": "h4",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h4.0735",
                "value": "Sandbox vs Production"
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
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "th",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "applepay.th.0736",
                                "value": "Sandbox / TEST"
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
                                "id": "applepay.th.0737",
                                "value": "Production"
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
                                    "id": "applepay.b.0738",
                                    "value": "Apple environment"
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
                                "id": "applepay.td.0739",
                                "value": "Apple Pay Sandbox tester (iCloud Sandbox account)"
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
                                "id": "applepay.td.0740",
                                "value": "Live iCloud account and provisioned cards"
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
                                    "id": "applepay.b.0741",
                                    "value": "Domain verification"
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
                                "id": "applepay.td.0742",
                                "value": "Register domains in Sandbox"
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
                                "id": "applepay.td.0743",
                                "value": "Register domains in Production"
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
                                    "id": "applepay.b.0744",
                                    "value": "Certificates"
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
                                "id": "applepay.td.0745",
                                "value": "Use Sandbox certificates / keys"
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
                                "id": "applepay.td.0746",
                                "value": "Use Production certificates / keys"
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
                                    "id": "applepay.b.0747",
                                    "value": "Tokens"
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
                                "id": "applepay.td.0748",
                                "value": "Test credentials; never chargeable"
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
                                "id": "applepay.td.0749",
                                "value": "Live credentials"
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
                                    "id": "applepay.b.0750",
                                    "value": "Paysecure side"
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
                                "id": "applepay.td.0751",
                                "value": "API key generated with 'Is Sandbox' ticked"
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
                                "id": "applepay.td.0752",
                                "value": "API key generated with 'Is Sandbox' unticked"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0753",
                "value": "Branding and UX requirements"
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
                "id": "applepay.p.0754",
                "value": "Because the cashier is yours, you are responsible for meeting Apple's Human Interface Guidelines and the Apple Pay Marketing & Identity Guidelines. Apple can withhold or revoke Apple Pay for violations. Authoritative sources: the Apple Pay on the Web Human Interface Guidelines and the Apple Pay Marketing Guidelines on "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0755",
                    "value": "developer.apple.com"
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
                    "id": "applepay.b.0756",
                    "value": "The button:"
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
                    "type": "text",
                    "id": "applepay.li.0757",
                    "value": "Always render the button with Apple's "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0758",
                        "value": "apple-pay-button"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0759",
                    "value": " component or the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0760",
                        "value": "-apple-pay-button"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0761",
                    "value": " CSS appearance; never build, recolour, or screenshot your own."
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
                    "type": "text",
                    "id": "applepay.li.0762",
                    "value": "Choose a button style for contrast (black, white, or white-outline) and an action type that matches the flow (buy, check-out, donate, subscribe, continue, or plain)."
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
                    "type": "text",
                    "id": "applepay.li.0763",
                    "value": "Maintain Apple's minimum size and clear-space rules, and make the Apple Pay button at least as prominent as other payment buttons on the page."
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
                    "type": "text",
                    "id": "applepay.li.0764",
                    "value": "Only show the button after "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0765",
                        "value": "canMakePayments()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0766",
                    "value": " (or "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0767",
                        "value": "canMakePaymentsWithActiveCard()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0768",
                    "value": ") confirms availability; never a greyed-out or decorative button."
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
                    "id": "applepay.b.0769",
                    "value": "The Apple Pay mark and naming:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0770",
                "value": " when listing payment options, use the official Apple Pay mark, unmodified, at the same size as other scheme logos. Refer to it in copy as \"Apple Pay\", never \"ApplePay\", \"apple pay\", or a translated name. Use the correct \"Buy with Apple Pay\" / \"Check out with Apple Pay\" lockups Apple supplies. Do not use the Apple logo or Apple Pay marks in a way that implies Apple endorses your business."
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
                    "id": "applepay.b.0771",
                    "value": "Don'ts that commonly fail review:"
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
                    "type": "text",
                    "id": "applepay.li.0772",
                    "value": "Don't wrap the button in your own border, shadow, or pill, or change its corner radius."
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
                    "type": "text",
                    "id": "applepay.li.0773",
                    "value": "Don't call "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.code.0774",
                        "value": "session.begin()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.li.0775",
                    "value": " outside a direct user-gesture handler; Safari blocks it."
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
                    "type": "text",
                    "id": "applepay.li.0776",
                    "value": "Don't request the payment sheet on an unverified or non-HTTPS domain."
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
                    "type": "text",
                    "id": "applepay.li.0777",
                    "value": "Don't surcharge or penalise Apple Pay relative to other card payments where scheme rules or local law prohibit it."
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
                    "id": "applepay.b.0778",
                    "value": "Conditions you accept via Apple's terms:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0779",
                "value": " serve the cashier over HTTPS with valid, strong TLS on a domain registered and verified against your Merchant ID; only offer Apple Pay for payment categories permitted by Apple's Acceptable Use terms (restricted verticals, including some regulated-gaming markets, require explicit approval for the relevant country); and use returned contact data (email, billing address) only to process the transaction, honouring Apple's privacy requirements."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0780",
                "value": "Scenario matrix, every combination"
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
                                "id": "applepay.th.0781",
                                "value": "Decryption model"
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
                                "id": "applepay.th.0782",
                                "value": "You submit"
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
                                "id": "applepay.th.0783",
                                "value": "Certificate / key custody"
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
                                "id": "applepay.th.0784",
                                "value": "PCI scope"
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
                                "id": "applepay.td.0785",
                                "value": "Paysecure, your cert (A)"
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
                                    "id": "applepay.code.0786",
                                    "value": "applepay_encrypted_payload"
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
                                "id": "applepay.td.0787",
                                "value": "You generate; share private key with Paysecure"
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
                                "id": "applepay.td.0788",
                                "value": "Reduced"
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
                                "id": "applepay.td.0789",
                                "value": "Paysecure, our CSR (B)"
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
                                    "id": "applepay.code.0790",
                                    "value": "applepay_encrypted_payload"
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
                                "id": "applepay.td.0791",
                                "value": "Paysecure generates; key never leaves us"
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
                                "id": "applepay.td.0792",
                                "value": "Reduced"
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
                                "id": "applepay.td.0793",
                                "value": "Processor (B variant)"
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
                                    "id": "applepay.code.0794",
                                    "value": "applepay_encrypted_payload"
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
                                "id": "applepay.td.0795",
                                "value": "Processor's CSR / cert; processor holds key"
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
                                "id": "applepay.td.0796",
                                "value": "Reduced"
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
                                "id": "applepay.td.0797",
                                "value": "Merchant (C)"
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
                                    "id": "applepay.code.0798",
                                    "value": "applepay_decrypted_payload"
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
                                "id": "applepay.td.0799",
                                "value": "You generate and hold the key"
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
                                "id": "applepay.td.0800",
                                "value": "Full (SAQ D)"
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
                "id": "applepay.p.0801",
                "value": "Across all four, merchant validation runs either on your servers (your Merchant Identity Certificate) or via Paysecure, independent of the decryption model."
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
                    "id": "applepay.b.0802",
                    "value": "paymentDataType and ECI values you will see:"
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
                                "id": "applepay.th.0803",
                                "value": "paymentDataType"
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
                                "id": "applepay.th.0804",
                                "value": "Credential fields"
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
                                "id": "applepay.th.0805",
                                "value": "Notes / ECI"
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
                                    "id": "applepay.code.0806",
                                    "value": "3DSecure"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0807",
                                    "value": "onlinePaymentCryptogram"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0808",
                                "value": " (required), "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0809",
                                    "value": "eciIndicator"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0810",
                                "value": " (sometimes)"
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
                                "id": "applepay.td.0811",
                                "value": "Cryptogram is a network 3DS cryptogram (TAVV/UCAF). ECI typically 5/6 (Visa) or 1/2 (Mastercard) when present; pass through, never hardcode"
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
                                    "id": "applepay.code.0812",
                                    "value": "EMV"
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0813",
                                    "value": "emvData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": ", "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0814",
                                    "value": "encryptedPINData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0815",
                                "value": " (where present)"
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
                                "id": "applepay.td.0816",
                                "value": "Full EMV payload for networks such as China UnionPay / Discover; forward verbatim, no ECI"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0817",
                "value": "Onboarding checklist: what you share with Paysecure"
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
                "id": "applepay.p.0818",
                "value": "Whoever decrypts the token supplies the CSRs and holds the private keys. In the default case Paysecure decrypts, so Paysecure supplies both CSRs. In every case you use your own Apple account, upload the CSRs to your Merchant ID, return the issued certificates, and never hold or send a private key."
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
                                "id": "applepay.th.0819",
                                "value": "Item"
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
                                "id": "applepay.th.0820",
                                "value": "Who creates it"
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
                                "id": "applepay.th.0821",
                                "value": "Shared with Paysecure?"
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
                                "id": "applepay.td.0822",
                                "value": "Apple Developer account & Merchant ID"
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
                                "id": "applepay.td.0823",
                                "value": "You; your own Apple account"
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
                                "id": "applepay.td.0824",
                                "value": "Merchant ID: yes, it is an identifier, not a secret"
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
                                "id": "applepay.td.0825",
                                "value": "Verified cashier domains (Sandbox + Production)"
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
                                "id": "applepay.td.0826",
                                "value": "You"
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
                                "id": "applepay.td.0827",
                                "value": "Yes; the full list"
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
                                "id": "applepay.td.0828",
                                "value": "Payment Processing Certificate"
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
                                "id": "applepay.td.0829",
                                "value": "Apple issues it from Paysecure's CSR, on your Merchant ID"
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
                                "id": "applepay.td.0830",
                                "value": "Yes; send the issued certificate back to us"
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
                                "id": "applepay.td.0831",
                                "value": "Merchant Identity Certificate"
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
                                "id": "applepay.td.0832",
                                "value": "Apple issues it from Paysecure's CSR, on your Merchant ID"
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
                                "id": "applepay.td.0833",
                                "value": "Yes; send the issued certificate back to us"
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
                                "id": "applepay.td.0834",
                                "value": "Private keys (PPC and MIC)"
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
                                "id": "applepay.td.0835",
                                "value": "Paysecure"
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
                                "id": "applepay.td.0836",
                                "value": "No; generated and held by Paysecure, so you never send a private key"
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0837",
                    "value": "What Paysecure gives you:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0838",
                "value": " the PPC CSR and the MIC CSR to upload to your Merchant ID (public-key requests only, no secrets); your API keys (Sandbox and Production) and your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0839",
                    "value": "brand_id"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0840",
                "value": "; and the merchant-validation endpoint your cashier calls when Paysecure runs validation. In case A (your certificate), you generate the keys instead and share the private key with Paysecure; in case C (merchant decryption), you generate and keep the private key and share only your PCI DSS attestation."
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
                        "id": "applepay.b.0841",
                        "value": "Provider-decryption alternative."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "applepay.p.0842",
                    "value": " Where your assigned provider cannot accept a decrypted payload, the provider decrypts instead and supplies the CSRs, which Paysecure relays to you (the same relay shown in Figure 6). You still upload the CSRs to your own Merchant ID and forward the encrypted payload to Paysecure exactly as before; only the party holding the keys changes."
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
            "tag": "h3",
            "props": {
              "id": "testing"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.testing.0843",
                "value": "Testing and go-live"
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
                    "type": "text",
                    "id": "applepay.li.0844",
                    "value": "Create an Apple Sandbox tester account in App Store Connect and sign in to iCloud with it on a test device; add Apple's test cards to Wallet."
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
                    "type": "text",
                    "id": "applepay.li.0845",
                    "value": "Register and verify your domains in Sandbox, and use Sandbox certificates / keys."
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
                    "type": "text",
                    "id": "applepay.li.0846",
                    "value": "Generate a Sandbox Paysecure API key ('Is Sandbox' ticked)."
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
                                "value": "#"
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
                                "id": "applepay.th.0847",
                                "value": "Test"
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
                                "id": "applepay.th.0848",
                                "value": "Expected"
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
                                "id": "applepay.td.0849",
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0850",
                                    "value": "canMakePayments()"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0851",
                                "value": " on supported vs unsupported device"
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
                                "id": "applepay.td.0852",
                                "value": "Button shown / hidden correctly"
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
                                "id": "applepay.td.0853",
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
                                "id": "applepay.td.0854",
                                "value": "Merchant validation success and failure (wrong domain / cert)"
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
                                "id": "applepay.td.0855",
                                "value": "Session obtained; failure aborts cleanly"
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
                                "id": "applepay.td.0856",
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
                                "id": "applepay.td.0857",
                                "value": "A "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0858",
                                    "value": "3DSecure"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0859",
                                "value": "-type token through your chosen decryption model"
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
                                "id": "applepay.td.0860",
                                "value": "End to end; webhook "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0861",
                                    "value": "paid"
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
                                "id": "applepay.td.0862",
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
                                "id": "applepay.td.0863",
                                "value": "An "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0864",
                                    "value": "EMV"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0865",
                                "value": "-type token (a supported regional network), if applicable"
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
                                "id": "applepay.td.0866",
                                "value": "Processed; forwarded verbatim"
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
                                "id": "applepay.td.0867",
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
                                "id": "applepay.td.0868",
                                "value": "Token-expiry / customer-cancel ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0869",
                                    "value": "oncancel"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0870",
                                "value": ", session timeout)"
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
                                "id": "applepay.td.0871",
                                "value": "Handled without a failed charge"
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
                                "id": "applepay.td.0872",
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
                                "id": "applepay.td.0873",
                                "value": "Certificate rotation rehearsal (two active PPCs)"
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
                                "id": "applepay.td.0874",
                                "value": "Tokens decrypt with either key during the overlap"
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
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.b.0875",
                    "value": "Go-live:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0876",
                "value": " production domains verified with Apple and A-grade TLS confirmed; production Payment Processing Certificate active and (case A) shared with Paysecure / (case B) issued from our CSR; production Merchant Identity Certificate installed on the validating side; Apple Pay button, marks, and naming pass Apple's brand guidelines; production Paysecure API key in place ('Is Sandbox' unticked) with webhooks reachable; and rotation reminders diarised ahead of the 25-month Payment Processing Certificate expiry."
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0877",
                "value": "Errors"
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
                                "id": "applepay.th.0878",
                                "value": "Symptom"
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
                                "id": "applepay.th.0879",
                                "value": "Likely cause & fix"
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
                                "id": "applepay.td.0880",
                                "value": "Decryption failed at Paysecure / processor"
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
                                "id": "applepay.td.0881",
                                "value": "Wrong or expired Payment Processing Certificate, or the shared private key does not match the cert Apple encrypted to. Re-check the certificate case and re-share / rotate"
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
                                    "id": "applepay.code.0882",
                                    "value": "publicKeyHash"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0883",
                                "value": " mismatch"
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
                                "id": "applepay.td.0884",
                                "value": "Token encrypted to a different certificate than the decrypting party holds; align the certificate registered against your Merchant ID with the decrypting key"
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
                                "id": "applepay.td.0885",
                                "value": "Merchant validation fails"
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
                                "id": "applepay.td.0886",
                                "value": "Domain not verified, wrong Merchant Identity Certificate, or "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0887",
                                    "value": "initiativeContext"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0888",
                                "value": " does not match the requesting domain"
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
                                "id": "applepay.td.0889",
                                "value": "Token expired / stale"
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
                                "id": "applepay.td.0890",
                                "value": "Submitted too late; the merchant session lives 5 minutes. Ask the customer to retry"
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
                                "id": "applepay.td.0891",
                                "value": "400, missing "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0892",
                                    "value": "extraParam.applepay_param"
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
                                "id": "applepay.td.0893",
                                "value": "Payload not placed inside "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0894",
                                    "value": "extraParam.applepay_param"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0895",
                                "value": ", or "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0896",
                                    "value": "paymentData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0897",
                                "value": " was re-serialised rather than passed verbatim"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "applepay.h3.0898",
                "value": "FAQ"
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
                    "id": "applepay.b.0899",
                    "value": "Does Apple Pay have a PAN_ONLY equivalent like Google Pay?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0900",
                "value": " No. Apple Pay always returns a device token (DPAN) with a per-transaction cryptogram, effectively "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0901",
                    "value": "CRYPTOGRAM_3DS"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0902",
                "value": " for every transaction. There is no real-card-on-file mode."
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
                    "id": "applepay.b.0903",
                    "value": "Can I use one certificate for both encryption and merchant validation?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0904",
                "value": " No. They are different certificates: the Payment Processing Certificate (EC, encrypts the token) and the Merchant Identity Certificate (RSA, authenticates the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0905",
                    "value": "validateMerchant"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0906",
                "value": " call). You need both."
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
                    "id": "applepay.b.0907",
                    "value": "Do I have to share my private key with Paysecure?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0908",
                "value": " Only in case A (your cert, Paysecure decrypts). Choose case B, Paysecure's CSR, and the private key never leaves Paysecure; you only upload a CSR and forward the encrypted token."
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
                    "id": "applepay.b.0909",
                    "value": "Why did decryption fail even though the customer authorised the payment?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0910",
                "value": " Almost always a certificate mismatch: the token was encrypted to a different Payment Processing Certificate than the decrypting party holds, or the certificate expired (25-month limit). Check "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0911",
                    "value": "publicKeyHash"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0912",
                "value": " and rotate."
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
                    "id": "applepay.b.0913",
                    "value": "Can Paysecure decrypt when my brand is on a specific processor?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0914",
                "value": " If the processor's Payment Processing Certificate is the one registered against your Merchant ID, the processor decrypts in its PCI zone, not Paysecure. You still just forward the encrypted token."
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
                    "id": "applepay.b.0915",
                    "value": "Where do I put the Apple Pay payload in the API?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0916",
                "value": " Always inside "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0917",
                    "value": "extraParam.applepay_param"
                  }
                ]
              },
              {
                "type": "text",
                "value": ": "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0918",
                    "value": "applepay_encrypted_payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0919",
                "value": " for the encrypted flow, "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "applepay.code.0920",
                    "value": "applepay_decrypted_payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "applepay.p.0921",
                "value": " for the merchant-decryption flow."
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
              "id": "references"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.references.0922",
                "value": "References"
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
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/documentation/apple_pay_on_the_web"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0923",
                        "value": "Apple Pay on the Web (Apple Developer)"
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
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/help/account/capabilities/configure-apple-pay-on-the-web"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0924",
                        "value": "Configure Apple Pay on the Web (Account Help)"
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
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/apple-pay/Apple-Pay-Merchant-Integration-Guide.pdf"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0925",
                        "value": "Apple Pay Merchant Integration Guide (PDF)"
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
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/documentation/applepayontheweb/providing-merchant-validation"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0926",
                        "value": "Providing merchant validation"
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
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/documentation/passkit/payment_token_format_reference"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0927",
                        "value": "Payment token format reference"
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
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/design/human-interface-guidelines/apple-pay"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0928",
                        "value": "Apple Pay Human Interface Guidelines"
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
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "https://developer.apple.com/apple-pay/marketing/"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.a.0929",
                        "value": "Apple Pay Marketing Guidelines"
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
              "id": "glossary"
            },
            "children": [
              {
                "type": "text",
                "id": "applepay.glossary.0930",
                "value": "Glossary"
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
                                "id": "applepay.th.0931",
                                "value": "Term"
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
                                "id": "applepay.th.0932",
                                "value": "Definition"
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
                                "id": "applepay.td.0933",
                                "value": "Merchant ID"
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
                                "id": "applepay.td.0934",
                                "value": "Your Apple Pay merchant identifier ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0935",
                                    "value": "merchant.com…"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0936",
                                "value": "), on your own Apple account. Never expires; bound into the token key derivation"
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
                                "id": "applepay.td.0937",
                                "value": "Payment Processing Certificate"
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
                                "id": "applepay.td.0938",
                                "value": "EC (P-256) certificate whose public key Apple encrypts the token to; the private key decrypts. Expires every 25 months"
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
                                "id": "applepay.td.0939",
                                "value": "Merchant Identity Certificate"
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
                                "id": "applepay.td.0940",
                                "value": "RSA certificate used as a TLS client cert to authenticate the "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0941",
                                    "value": "validateMerchant"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0942",
                                "value": " call to Apple"
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
                                "id": "applepay.td.0943",
                                "value": "Merchant validation"
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
                                "id": "applepay.td.0944",
                                "value": "The handshake where your (or Paysecure's) server obtains a single-use merchant session from Apple before the sheet shows"
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
                                "id": "applepay.td.0945",
                                "value": "Hosted cashier"
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
                                "id": "applepay.td.0946",
                                "value": "The Paysecure-hosted checkout behind "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0947",
                                    "value": "checkout_url"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0948",
                                "value": " that renders the Apple Pay button and handles the token"
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
                                "id": "applepay.td.0949",
                                "value": "DPAN"
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
                                "id": "applepay.td.0950",
                                "value": "Device account number: the network token returned instead of the real card number (FPAN)"
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
                                "id": "applepay.td.0951",
                                "value": "Cryptogram"
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
                                "id": "applepay.td.0952",
                                "value": "Single-use network cryptogram (e.g. TAVV / UCAF) proving the transaction is device-authenticated"
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
                                "id": "applepay.td.0953",
                                "value": "EC_v1 / RSA_v1"
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
                                "id": "applepay.td.0954",
                                "value": "Apple Pay token encryption versions; "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0955",
                                    "value": "EC_v1"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0956",
                                "value": " (ECIES over P-256) is standard, "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0957",
                                    "value": "RSA_v1"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0958",
                                "value": " is regional / legacy"
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
                                "id": "applepay.td.0959",
                                "value": "paymentDataType"
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
                                    "id": "applepay.code.0960",
                                    "value": "3DSecure"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0961",
                                "value": " (cryptogram + ECI) or "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0962",
                                    "value": "EMV"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "value": " ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0963",
                                    "value": "emvData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0964",
                                "value": "): the credential type inside the decrypted token"
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
                                "id": "applepay.td.0965",
                                "value": "checkout_url"
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
                                "id": "applepay.td.0966",
                                "value": "The redirect URL returned by "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "applepay.code.0967",
                                    "value": "POST /purchases/"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "applepay.td.0968",
                                "value": " that opens the Paysecure cashier"
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
                "id": "applepay.p.0969",
                "value": "Apple Pay is a trademark of Apple Inc. Console figures are simplified illustrative reproductions. developer.paysecure.net remains the canonical source for field-level changes."
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
                "id": "applepay.apis.0970",
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
                "id": "applepay.p.0971",
                "value": "Endpoints, parameters, payload shapes and the try-it runner live in the API reference:"
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
              "className": "cards c2"
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
                  "href": "/api-applepay"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.h4.0972",
                        "value": "Apple Pay API →"
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
                        "id": "applepay.p.0973",
                        "value": "Hosted redirect, encrypted and decrypted server-to-server flows, "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.code.0974",
                            "value": "applepay_param"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "applepay.p.0975",
                        "value": " field spec."
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
                  "href": "/api-googlepay"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "applepay.h4.0976",
                        "value": "Google Pay API →"
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
                        "id": "applepay.p.0977",
                        "value": "The companion wallet: redirect, encrypted and decrypted payloads, field spec."
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
                  "updated": "Last updated 08 Jul 2026 · v2.5"
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
                      "href": "/googlepay"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.small.0978",
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
                            "id": "applepay.b.0979",
                            "value": "← Google Pay"
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
                      "href": "/interac-etransfer"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "applepay.small.0980",
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
                            "id": "applepay.b.0981",
                            "value": "Interac e-Transfer →"
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
