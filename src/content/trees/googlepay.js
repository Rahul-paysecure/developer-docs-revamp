import { defineDocument } from '../schema.js';

export const googlepayTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "googlepay",
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
                    "id": "googlepay.doclink.0001",
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
                    "id": "googlepay.doclink.0002",
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
                "id": "googlepay.div.0003",
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
                "id": "googlepay.div.0004",
                "value": "Google Pay"
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
                "id": "googlepay.h1.0005",
                "value": "Google Pay"
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
                "id": "googlepay.p.0006",
                "value": "Accept cards saved to your customers' Google accounts and Android devices. Two ways to integrate: let the Paysecure cashier host the Google Pay button, or render it on your own checkout."
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
                "id": "googlepay.how-it-works.0007",
                "value": "How Google Pay works"
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
                "id": "googlepay.p.0008",
                "value": "When the customer taps the Google Pay button, Google shows a payment sheet listing the cards saved to their Google account or provisioned on their Android device. After the customer confirms, Google returns an encrypted "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0009",
                    "value": "ECv2 payment token"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0010",
                "value": " to whichever page hosts the button. The token can only be opened by its intended recipient: the processor in the PAYMENT_GATEWAY model, or the holder of your private key in the DIRECT model. Each token carries one of two authentication methods, which behave differently downstream:"
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
                                "id": "googlepay.th.0011",
                                "value": "PAN_ONLY"
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
                                "id": "googlepay.th.0012",
                                "value": "CRYPTOGRAM_3DS"
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
                                    "id": "googlepay.b.0013",
                                    "value": "What it is"
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
                                "id": "googlepay.td.0014",
                                "value": "A card on file with the customer's Google account (added in Chrome, Play, YouTube)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0015",
                                "value": "A network token (DPAN) provisioned on the customer's Android device through the card network's tokenisation service"
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
                                    "id": "googlepay.b.0016",
                                    "value": "Credential returned"
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
                                "id": "googlepay.td.0017",
                                "value": "Real card number (FPAN) + expiry"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0018",
                                "value": "Device PAN (DPAN) + expiry + one-time cryptogram (TAVV) + ECI (sometimes)"
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
                                    "id": "googlepay.b.0019",
                                    "value": "Treated by networks as"
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
                                "id": "googlepay.td.0020",
                                "value": "Standard card-not-present e-commerce"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0021",
                                "value": "Tokenised, authenticated device transaction"
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
                                    "id": "googlepay.b.0022",
                                    "value": "3-D Secure"
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
                                "id": "googlepay.td.0023",
                                "value": "May be required; in SCA markets (EEA/UK) almost always"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0024",
                                "value": "Cryptogram generally satisfies authentication; additional 3DS usually unnecessary"
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
                                    "id": "googlepay.b.0025",
                                    "value": "Fraud liability"
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
                                "id": "googlepay.td.0026",
                                "value": "Merchant/acquirer, unless 3DS shifts it to the issuer"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0027",
                                "value": "Typically shifts to the issuer (network-dependent)"
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
                                    "id": "googlepay.b.0028",
                                    "value": "Where it appears"
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
                                "id": "googlepay.td.0029",
                                "value": "Any browser or device signed in to Google"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0030",
                                "value": "Android devices with NFC/HCE and a provisioned card"
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
                        "id": "googlepay.b.0031",
                        "value": "Recommendation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0032",
                    "value": " always request both auth methods unless your acquiring setup cannot process one of them. Restricting to CRYPTOGRAM_3DS sharply reduces Google Pay availability on desktop browsers."
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
                "id": "googlepay.h3.0033",
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
                "id": "googlepay.p.0034",
                "value": "Google signs and encrypts every token using the ECv2 protocol: an ECDSA signature chain (Google root keys → intermediate signing key → payload signature) plus ECIES hybrid encryption (ECDH on curve NIST P-256, HKDF-SHA256 key derivation, AES-256-CTR encryption, HMAC-SHA256 integrity tag). You only implement this yourself in the DIRECT decrypted-submission mode; in every other mode the decrypting party handles it."
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
              "id": "google-account"
            },
            "children": [
              {
                "type": "text",
                "id": "googlepay.google-account.0035",
                "value": "Google account setup"
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
                "id": "googlepay.p.0036",
                "value": "All Google Pay configuration lives in the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0037",
                    "value": "Google Pay & Wallet Console"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0038",
                "value": " (pay.google.com/business/console). You own this account, Paysecure cannot create it for you; tokens are always issued against your merchant profile, whichever cashier hosts the button. Complete this section before either integration. The console figures are simplified illustrative reproductions."
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
                "id": "googlepay.h3.0039",
                "value": "1. Create the account and business profile"
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
                    "id": "googlepay.li.0040",
                    "value": "Sign in with the Google account your business will own long-term. Use a role-based Google Workspace account (e.g. "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0041",
                        "value": "payments@yourcompany.com"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0042",
                    "value": "), not the personal Gmail of an individual employee, and add at least two admin users under Settings → Users for continuity."
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
                    "id": "googlepay.li.0043",
                    "value": "Open the Google Pay & Wallet Console and accept the Terms of Service."
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
                    "id": "googlepay.li.0044",
                    "value": "Complete the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.b.0045",
                        "value": "Business Profile"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0046",
                    "value": ": legal business name, address, website, and customer-support contact. Google reviews this before granting production access."
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
                      "src": "/assets/googlepay-console-business-profile.png",
                      "alt": "Business Profile in the Google Pay and Wallet Console",
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
                    "id": "googlepay.figcaption.0047",
                    "value": "Figure 1 · Business Profile (illustrative reproduction of the Google Pay & Wallet Console)"
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
                "id": "googlepay.h3.0048",
                "value": "2. Note and share your Merchant ID"
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
                "id": "googlepay.p.0049",
                "value": "Your "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0050",
                    "value": "Merchant ID"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0051",
                "value": " sits in the console header next to your business name (format like "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0052",
                    "value": "BCR2DN4T…"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0053",
                "value": "). You will use it as "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0054",
                    "value": "merchantInfo.merchantId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0055",
                "value": " in the Google Pay JS (merchant cashier), and it is configured as "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0056",
                    "value": "merchant:YOUR_MERCHANT_ID"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0057",
                "value": " on the Paysecure side; for DIRECT it is also baked into the token's signature. Share it with Paysecure at onboarding."
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
                      "src": "/assets/googlepay-console-merchant-id.png",
                      "alt": "Merchant ID in the console header",
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
                    "id": "googlepay.figcaption.0058",
                    "value": "Figure 2 · Merchant ID in the console header (illustrative; mirrors Google's documentation)"
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
                "id": "googlepay.h3.0059",
                "value": "3. Register your web integration"
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
                "id": "googlepay.p.0060",
                "value": "Google only issues live tokens to buttons rendered on registered, HTTPS-served domains with valid TLS. In the console choose "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0061",
                    "value": "Google Pay API → Integrate with Google Pay"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0062",
                "value": ", select "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0063",
                    "value": "Web"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0064",
                "value": ", and register the domains where the button lives; which domains depends on your integration:"
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
                                "id": "googlepay.th.0065",
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
                                "id": "googlepay.th.0066",
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
                                "id": "googlepay.th.0067",
                                "value": "Screenshots for Google's review"
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
                                    "id": "googlepay.b.0068",
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
                                    "id": "googlepay.b.0069",
                                    "value": "Paysecure's"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0070",
                                "value": " cashier domains, provided by your onboarding manager (they vary by brand and region)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0071",
                                "value": "Cashier screenshots and screen recording, supplied by Paysecure (already brand-guideline compliant)"
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
                                    "id": "googlepay.b.0072",
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
                                "id": "googlepay.td.0073",
                                "value": "Your own checkout domains"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0074",
                                "value": "Screenshots or recording of your full checkout flow: button placement, payment sheet, confirmation page"
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
                "id": "googlepay.p.0075",
                "value": "Select the integration type ("
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0076",
                    "value": "Gateway"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0077",
                "value": " for PAYMENT_GATEWAY or "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0078",
                    "value": "Direct"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0079",
                "value": " for DIRECT), complete the integration checklist, upload the screenshots, and submit for "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0080",
                    "value": "production access"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0081",
                "value": ". Approval typically takes a few business days; Google may return branding feedback you must fix and resubmit."
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
                      "src": "/assets/googlepay-console-domain-hosted.png",
                      "alt": "Registering the Paysecure cashier domain",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/googlepay-console-web-integration.png",
                      "alt": "Web integration registration and checklist",
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
                    "id": "googlepay.figcaption.0082",
                    "value": "Figure 3 · Registering the integration: Paysecure cashier domain (left) and your own web integration (right); illustrative reproductions"
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
                        "id": "googlepay.b.0083",
                        "value": "You can build and test everything before approval."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0084",
                    "value": " The TEST environment returns dummy tokens that cannot be charged; production approval is only needed to receive live tokens. Plan the console review into your go-live timeline."
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
                "id": "googlepay.h3.0085",
                "value": "4. DIRECT only: keys and Direct terms"
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
                    "id": "googlepay.li.0086",
                    "value": "Select "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.b.0087",
                        "value": "Direct"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0088",
                    "value": " tokenisation and accept Google's Direct terms, including a PCI DSS commitment; for the decrypted-submission mode you must be able to attest to PCI DSS (typically SAQ D) and renew the attestation annually."
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
                    "id": "googlepay.li.0089",
                    "value": "Generate your EC key pair on curve NIST P-256 ("
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0090",
                        "value": "prime256v1"
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
                        "id": "googlepay.code.0091",
                        "value": "secp256r1"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0092",
                    "value": ") on a secured machine, ideally inside the HSM/KMS that will hold it."
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
                    "id": "googlepay.li.0093",
                    "value": "Paste the base64 public key into the console under "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.b.0094",
                        "value": "Direct integration → Public encryption keys"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0095",
                    "value": "; multiple keys can be active simultaneously to support zero-downtime rotation."
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
                        "id": "googlepay.b.0096",
                        "value": "Encrypted submission mode only:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0097",
                    "value": " share the matching private key with Paysecure through the secure channel agreed with your onboarding manager; never email, chat, or tickets."
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
                    "id": "googlepay.li.0098",
                    "value": "Record which key was active when: during rotation Google may encrypt with any registered key, so the decrypting side must try each active private key."
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
                        "id": "googlepay.span.0099",
                        "value": "Key generation (P-256)"
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
                        "id": "googlepay.button.0100",
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
                        "id": "googlepay.span.0101",
                        "value": "# 1 · Generate the merchant private key (keep this secret)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0102",
                    "value": "\nopenssl ecparam -name prime256v1 -genkey -noout -out key.pem\n\n"
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
                        "id": "googlepay.span.0103",
                        "value": "# 2 · Inspect the key pair (sanity check)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0104",
                    "value": "\nopenssl ec -in key.pem -pubout -text -noout\n\n"
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
                        "id": "googlepay.span.0105",
                        "value": "# 3 · Export the PUBLIC key (base64 uncompressed point)"
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
                        "id": "googlepay.span.0106",
                        "value": "#     paste into the console under Direct integration → public encryption keys"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0107",
                    "value": "\nopenssl ec -in key.pem -pubout -text -noout 2> /dev/null | grep \"pub:\" -A5 \\\n  | sed 1d | xxd -r -p | base64 | paste -sd \"\" -\n\n"
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
                        "id": "googlepay.span.0108",
                        "value": "# 4 · Export the PRIVATE key (base64 PKCS#8; the format Tink consumes, and"
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
                        "id": "googlepay.span.0109",
                        "value": "#     the format Paysecure expects in the encrypted submission mode)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0110",
                    "value": "\nopenssl pkcs8 -topk8 -inform PEM -outform DER -in key.pem -nocrypt \\\n  | base64 | paste -sd \"\" -"
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
                      "src": "/assets/googlepay-console-direct-keys.png",
                      "alt": "Direct integration public encryption keys",
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
                    "id": "googlepay.figcaption.0111",
                    "value": "Figure 4 · Direct integration public encryption keys (illustrative reproduction)"
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
                "id": "googlepay.h3.0112",
                "value": "5. PAYMENT_GATEWAY only: gateway values"
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
                "id": "googlepay.p.0113",
                "value": "Nothing else to configure in the console. The binding to your processor happens in the button's tokenisation configuration: the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0114",
                    "value": "gateway name"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0115",
                "value": " (the processor's Google Pay gateway ID) and your "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0116",
                    "value": "gatewayMerchantId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0117",
                "value": " (your merchant identifier at that processor). Both values come from your gateway, not from Google. On the Paysecure cashier you supply them to Paysecure at onboarding; on your own cashier they go into your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0118",
                    "value": "tokenizationSpecification"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0119",
                "value": ". If Paysecure manages the processor relationship for your brand, we already hold these values and simply confirm them with you."
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
                          "d": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
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
                        "id": "googlepay.b.0120",
                        "value": "Security:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0121",
                    "value": " never share your Google account password or console access with anyone, including Paysecure. We never need console access; only the values listed in the onboarding checklists below."
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
                "id": "googlepay.paysecure-cashier.0122",
                "value": "Google Pay on the Paysecure cashier"
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
                "id": "googlepay.p.0123",
                "value": "You create a purchase with the API and redirect the customer to the returned "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0124",
                    "value": "checkout_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0125",
                "value": ". The Paysecure cashier renders the Google Pay button, runs the Google Pay JavaScript, handles branding compliance, collects the token, and completes the payment. "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.b.0126",
                    "value": "Your systems never see the Google Pay token"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0127",
                "value": ", and there is no Google Pay code for you to write. Written for backend teams integrating the Purchases API and the operations owner of your Wallet Console account."
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
                "id": "googlepay.h3.0128",
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
                                "id": "googlepay.th.0129",
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
                                "id": "googlepay.th.0130",
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
                                "id": "googlepay.th.0131",
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
                                "id": "googlepay.td.0132",
                                "value": "Cashier page, Google Pay button, JS & branding"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0133",
                                "value": "No; you only redirect to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0134",
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
                                "id": "googlepay.td.0135",
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
                                "id": "googlepay.td.0136",
                                "value": "Google Pay & Wallet Console account and production approval"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0137",
                                "value": "Yes; your account"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0138",
                                "value": "Provides cashier domains, screenshots, and guidance"
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
                                "id": "googlepay.td.0139",
                                "value": "Token handling: PAYMENT_GATEWAY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0140",
                                "value": "Never see it"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0141",
                                "value": "Forwards to the assigned processor, which decrypts in its PCI zone"
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
                                "id": "googlepay.td.0142",
                                "value": "Token handling: DIRECT"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0143",
                                "value": "Never see it; you share your private key"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0144",
                                "value": "Decrypts inside Paysecure's PCI environment"
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
                                "id": "googlepay.td.0145",
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
                                "id": "googlepay.td.0146",
                                "value": "Yes; create purchase, then redirect"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0147",
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
                                "id": "googlepay.td.0148",
                                "value": "PCI DSS scope for Google Pay card data"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0149",
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
                                "id": "googlepay.td.0150",
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
                "id": "googlepay.h3.0151",
                "value": "Two tokenisation flows"
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
                "id": "googlepay.p.0152",
                "value": "Operationally identical for you (same API, same redirect); they differ in whose keys Google encrypts to:"
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
                                "id": "googlepay.th.0153",
                                "value": "PAYMENT_GATEWAY"
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
                                "id": "googlepay.th.0154",
                                "value": "DIRECT"
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
                                    "id": "googlepay.b.0155",
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
                                "id": "googlepay.td.0156",
                                "value": "The assigned processor's keys (Paysafe, Shift4, PayNearMe, etc.)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0157",
                                "value": "Your public key (uploaded to your Google console)"
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
                                    "id": "googlepay.b.0158",
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
                                "id": "googlepay.td.0159",
                                "value": "The processor, in its PCI zone; never Paysecure"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0160",
                                "value": "Paysecure, using the private key you share at onboarding"
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
                                    "id": "googlepay.b.0161",
                                    "value": "Key management for you"
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
                                "id": "googlepay.td.0162",
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
                                "id": "googlepay.td.0163",
                                "value": "Generate an EC P-256 key pair, register the public key, share the private key via a secure channel, rotate annually"
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
                                    "id": "googlepay.b.0164",
                                    "value": "Console setup"
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
                                "id": "googlepay.td.0165",
                                "value": "Business profile + cashier-domain registration"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0166",
                                "value": "Same, plus Direct terms and public-key registration"
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
                                    "id": "googlepay.b.0167",
                                    "value": "Routing"
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
                                "id": "googlepay.td.0168",
                                "value": "Pinned to the processor the token was encrypted to"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0169",
                                "value": "Flexible across Paysecure's network"
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
                                    "id": "googlepay.b.0170",
                                    "value": "Your effort"
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
                                "id": "googlepay.td.0171",
                                "value": "Create purchase + redirect"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0172",
                                "value": "Create purchase + redirect + a key ceremony at onboarding"
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
                "id": "googlepay.p.0173",
                "value": "DIRECT keeps routing flexible across the processor network; PAYMENT_GATEWAY is the lighter setup when your brand is anchored to one processor. Your onboarding manager confirms which is enabled for your brand; the cashier behaviour and your integration are the same either way."
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
                      "src": "/assets/googlepay-hosted-payment-gateway.png",
                      "alt": "PAYMENT_GATEWAY flow on the hosted cashier",
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
                    "id": "googlepay.figcaption.0174",
                    "value": "Figure 5 · PAYMENT_GATEWAY on the hosted cashier: the assigned processor decrypts; neither you nor Paysecure ever hold card data"
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
                      "src": "/assets/googlepay-hosted-direct.png",
                      "alt": "DIRECT flow on the hosted cashier",
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
                    "id": "googlepay.figcaption.0175",
                    "value": "Figure 6 · DIRECT on the hosted cashier: Paysecure decrypts with the private key you shared at onboarding"
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
                        "id": "googlepay.b.0176",
                        "value": "Before you start:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0177",
                    "value": " complete the "
                  },
                  {
                    "type": "element",
                    "tag": "a",
                    "props": {
                      "className": "inline",
                      "href": "#google-account"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.a.0178",
                        "value": "Google account setup"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0179",
                    "value": ", registering the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.b.0180",
                        "value": "Paysecure cashier domains"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0181",
                    "value": " supplied by your onboarding manager. Keep separate TEST and PRODUCTION key pairs for DIRECT, clearly labelled, and hand both to Paysecure."
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
                "id": "googlepay.h3.0182",
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
                        "id": "googlepay.div.0183",
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
                            "id": "googlepay.span.0184",
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
                            "id": "googlepay.b.0185",
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
                            "id": "googlepay.p.0186",
                            "value": "Your backend calls the purchase API with amount, customer, redirect and callback URLs; no Google Pay payload."
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
                        "id": "googlepay.div.0187",
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
                            "id": "googlepay.span.0188",
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
                            "id": "googlepay.b.0189",
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
                            "id": "googlepay.p.0190",
                            "value": "Full redirect on web; in-app browser or Custom Tab on mobile."
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
                        "id": "googlepay.div.0191",
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
                          "className": "who p"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.span.0192",
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
                            "id": "googlepay.b.0193",
                            "value": "Cashier renders Google Pay"
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
                            "id": "googlepay.p.0194",
                            "value": "The button appears when Google's isReadyToPay confirms availability for that customer and device, alongside the other methods enabled for your brand."
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
                        "id": "googlepay.div.0195",
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
                          "className": "who c"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.span.0196",
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
                            "id": "googlepay.b.0197",
                            "value": "Confirms in the payment sheet"
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
                            "id": "googlepay.p.0198",
                            "value": "Google returns the encrypted token to the cashier; any 3DS challenge for PAN_ONLY credentials runs inline on the cashier."
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
                        "id": "googlepay.div.0199",
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
                          "className": "who p"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.span.0200",
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
                            "id": "googlepay.b.0201",
                            "value": "Decrypt and authorise"
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
                            "id": "googlepay.p.0202",
                            "value": "PAYMENT_GATEWAY: the token goes to the assigned processor, which decrypts in its PCI zone; Paysecure cannot decrypt it. DIRECT: Paysecure verifies Google's signature chain (recipient "
                          },
                          {
                            "type": "element",
                            "tag": "code",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.code.0203",
                                "value": "merchant:YOUR_MERCHANT_ID"
                              }
                            ]
                          },
                          {
                            "type": "text",
                            "id": "googlepay.p.0204",
                            "value": "), decrypts with your shared key, validates expiry and message ID, and routes to the optimal processor."
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
                        "id": "googlepay.div.0205",
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
                          "className": "who m"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.span.0206",
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
                            "id": "googlepay.b.0207",
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
                            "id": "googlepay.p.0208",
                            "value": "The customer returns via your redirect URLs; the final state arrives on your callbacks. Treat the webhook, not the redirect, as the source of truth."
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
                "id": "googlepay.h3.0209",
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
                    "type": "text",
                    "id": "googlepay.li.0210",
                    "value": "Zero Google Pay code: no pay.js, no tokenisation configuration, no token handling."
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
                    "id": "googlepay.li.0211",
                    "value": "PCI scope for Google Pay is nil; the token goes from Google to the cashier to the decrypting party."
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
                    "id": "googlepay.li.0212",
                    "value": "PAYMENT_GATEWAY routing is pinned to the processor whose keys the token was encrypted to; if Paysecure re-routes your brand, we update the cashier configuration and nothing changes on your side."
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
                    "id": "googlepay.li.0213",
                    "value": "DIRECT key custody stays with you: keep a copy in an HSM/KMS, rotate annually with an overlap window, and if a key may have leaked, remove it from your console immediately (Google stops encrypting to it within minutes), notify Paysecure, and rotate."
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
                "id": "googlepay.h3.0214",
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
                                "id": "googlepay.th.0215",
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
                                "id": "googlepay.th.0216",
                                "value": "Who decrypts"
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
                                "id": "googlepay.th.0217",
                                "value": "3-D Secure"
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
                                "id": "googlepay.th.0218",
                                "value": "Typical liability"
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
                                "id": "googlepay.td.0219",
                                "value": "PAYMENT_GATEWAY + PAN_ONLY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0220",
                                "value": "Processor"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0221",
                                "value": "Challenge likely in SCA markets; runs inline on the cashier"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0222",
                                "value": "Issuer after successful 3DS; otherwise merchant"
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
                                "id": "googlepay.td.0223",
                                "value": "PAYMENT_GATEWAY + CRYPTOGRAM_3DS"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0224",
                                "value": "Processor"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0225",
                                "value": "Usually none; cryptogram carries authentication"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0226",
                                "value": "Issuer (network rules apply)"
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
                                "id": "googlepay.td.0227",
                                "value": "DIRECT + PAN_ONLY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0228",
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
                                "id": "googlepay.td.0229",
                                "value": "Challenge likely in SCA markets; runs inline on the cashier"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0230",
                                "value": "Issuer after successful 3DS; otherwise merchant"
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
                                "id": "googlepay.td.0231",
                                "value": "DIRECT + CRYPTOGRAM_3DS"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0232",
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
                                "id": "googlepay.td.0233",
                                "value": "Usually none"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0234",
                                "value": "Issuer (network rules apply)"
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
                "id": "googlepay.p.0235",
                "value": "ECI handling is invisible to you on the hosted cashier; the decrypting side passes Google's "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0236",
                    "value": "eciIndicator"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0237",
                "value": " to the network unaltered, and the purchase record shows the auth method and ECI used for chargeback reconciliation. CRYPTOGRAM_3DS generally qualifies as SCA-compliant under PSD2; expect 3DS challenges on PAN_ONLY traffic in the EEA/UK."
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
                "id": "googlepay.h3.0238",
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
                                "id": "googlepay.th.0239",
                                "value": "Item (all flows)"
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
                                "id": "googlepay.th.0240",
                                "value": "Details"
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
                                "id": "googlepay.td.0241",
                                "value": "Google Merchant ID"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0242",
                                "value": "From your Wallet Console header; the cashier requests tokens for "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0243",
                                    "value": "merchant:<ID>"
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
                                "id": "googlepay.td.0244",
                                "value": "Redirect URLs"
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
                                    "id": "googlepay.code.0245",
                                    "value": "success_redirect"
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
                                    "id": "googlepay.code.0246",
                                    "value": "pending_redirect"
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
                                    "id": "googlepay.code.0247",
                                    "value": "failure_redirect"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0248",
                                "value": " defaults for your brand"
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
                                "id": "googlepay.td.0249",
                                "value": "Webhook endpoints"
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
                                    "id": "googlepay.code.0250",
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
                                    "id": "googlepay.code.0251",
                                    "value": "failure_callback"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0252",
                                "value": " URLs"
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
                                "id": "googlepay.td.0253",
                                "value": "Markets & currencies"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0254",
                                "value": "Target countries, currencies, expected card networks; drives routing and SCA configuration"
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
                                "id": "googlepay.td.0255",
                                "value": "Console production approval"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0256",
                                "value": "Live Google Pay on the cashier requires your console review to be complete"
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
                                "id": "googlepay.th.0257",
                                "value": "Flow"
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
                                "id": "googlepay.th.0258",
                                "value": "You share with Paysecure"
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
                                "id": "googlepay.th.0259",
                                "value": "Paysecure provides to you"
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
                                    "id": "googlepay.b.0260",
                                    "value": "PAYMENT_GATEWAY"
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
                                    "id": "googlepay.code.0261",
                                    "value": "gateway"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0262",
                                "value": " (the processor's Google Pay gateway ID) and "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0263",
                                    "value": "gatewayMerchantId"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0264",
                                "value": " (your merchant identifier at that processor); both go verbatim into the cashier's tokenisation configuration"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0265",
                                "value": "Cashier domain list + checkout screenshots/recording for your console submission; confirmation of the gateway values if Paysecure manages the processor relationship"
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
                                    "id": "googlepay.b.0266",
                                    "value": "DIRECT"
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
                                "id": "googlepay.td.0267",
                                "value": "Your base64 PUBLIC key (uncompressed P-256 point, identical to the console registration) + your base64 PKCS#8 PRIVATE key via secure channel (TEST and PRODUCTION, labelled); advance notice of every rotation"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0268",
                                "value": "Cashier domain list + screenshots; confirmation of key installation; rotation cut-over coordination"
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
                "id": "googlepay.h3.0269",
                "value": "The Google Pay JS values behind the cashier"
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
                "id": "googlepay.p.0270",
                "value": "For reference, every field the cashier needs to load Google Pay on your behalf, and where each value comes from. If any of these is missing or wrong, the Google Pay button will not appear (or tokens will fail downstream):"
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
                                "id": "googlepay.th.0271",
                                "value": "Google Pay JS field"
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
                                "id": "googlepay.th.0272",
                                "value": "Value"
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
                                "id": "googlepay.th.0273",
                                "value": "Supplied by"
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
                                    "id": "googlepay.code.0274",
                                    "value": "merchantInfo.merchantId"
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
                                "id": "googlepay.td.0275",
                                "value": "Your Wallet Console Merchant ID (BCR2DN4T…)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0276",
                                "value": "You"
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
                                    "id": "googlepay.code.0277",
                                    "value": "merchantInfo.merchantName"
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
                                "id": "googlepay.td.0278",
                                "value": "The trading name shown in Google's payment sheet"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0279",
                                "value": "You"
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
                                    "id": "googlepay.code.0280",
                                    "value": "tokenizationSpecification.type"
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
                                "id": "googlepay.td.0281",
                                "value": "PAYMENT_GATEWAY or DIRECT, per your chosen flow"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0282",
                                "value": "Agreed at onboarding"
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
                                    "id": "googlepay.code.0283",
                                    "value": "parameters.gateway"
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
                                "id": "googlepay.td.0284",
                                "value": "Processor's Google Pay gateway ID (PAYMENT_GATEWAY only)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0285",
                                "value": "You / your processor route"
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
                                    "id": "googlepay.code.0286",
                                    "value": "parameters.gatewayMerchantId"
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
                                "id": "googlepay.td.0287",
                                "value": "Your merchant identifier at that processor (PAYMENT_GATEWAY only)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0288",
                                "value": "You / your processor route"
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
                                    "id": "googlepay.code.0289",
                                    "value": "parameters.protocolVersion"
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
                                    "id": "googlepay.code.0290",
                                    "value": "\"ECv2\""
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0291",
                                "value": " (DIRECT only)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0292",
                                "value": "Fixed"
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
                                    "id": "googlepay.code.0293",
                                    "value": "parameters.publicKey"
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
                                "id": "googlepay.td.0294",
                                "value": "Your base64 P-256 public key, matching the console registration (DIRECT only)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0295",
                                "value": "You"
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
                                    "id": "googlepay.code.0296",
                                    "value": "allowedAuthMethods"
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
                                "id": "googlepay.td.0297",
                                "value": "PAN_ONLY + CRYPTOGRAM_3DS (cashier default; restrictable on request)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0298",
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
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0299",
                                    "value": "allowedCardNetworks"
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
                                "id": "googlepay.td.0300",
                                "value": "Card networks enabled for your brand (e.g. VISA, MASTERCARD)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0301",
                                "value": "Agreed at onboarding"
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
                                    "id": "googlepay.code.0302",
                                    "value": "transactionInfo"
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
                                "id": "googlepay.td.0303",
                                "value": "Amount, currency, countryCode; built per purchase from your create-purchase request"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0304",
                                "value": "Paysecure, per transaction"
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
                                    "id": "googlepay.code.0305",
                                    "value": "environment"
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
                                "id": "googlepay.td.0306",
                                "value": "TEST (sandbox keys) or PRODUCTION (live keys)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0307",
                                "value": "Paysecure, per environment"
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
                    "id": "googlepay.b.0308",
                    "value": "What Paysecure issues at onboarding:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0309",
                "value": " your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0310",
                    "value": "brand_id"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0311",
                "value": "; API keys (generated in Dashboard → API Keys, sandbox with 'Is Sandbox' checked, live with it unchecked); the cashier domain(s) to register in your console plus the screenshots and recording for Google's review; and the webhook signing key setup for verifying callback authenticity."
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
                "id": "googlepay.h3.0312",
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
                    "id": "googlepay.li.0313",
                    "value": "Use a Paysecure API key generated with 'Is Sandbox' checked; the sandbox cashier runs Google Pay in TEST mode (dummy tokens, never chargeable)."
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
                    "id": "googlepay.li.0314",
                    "value": "Join Google's test card suite with the Google account you test with; the payment sheet then offers test cards for both auth methods."
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
                    "id": "googlepay.li.0315",
                    "value": "DIRECT: deliver the TEST private key to Paysecure before your first sandbox transaction."
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
                                "id": "googlepay.th.0316",
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
                                "id": "googlepay.th.0317",
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
                                "id": "googlepay.td.0318",
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
                                "id": "googlepay.td.0319",
                                "value": "Create purchase → redirect → pay with PAN_ONLY test card"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0320",
                                "value": "Customer returns via "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0321",
                                    "value": "success_redirect"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0322",
                                "value": "; webhook "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0323",
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
                                "id": "googlepay.td.0324",
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
                                "id": "googlepay.td.0325",
                                "value": "PAN_ONLY in an SCA test market"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0326",
                                "value": "3DS challenge inline on the cashier; webhook "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0327",
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
                                "id": "googlepay.td.0328",
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
                                "id": "googlepay.td.0329",
                                "value": "CRYPTOGRAM_3DS test card"
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
                                    "id": "googlepay.code.0330",
                                    "value": "paid"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0331",
                                "value": " without a challenge"
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
                                "id": "googlepay.td.0332",
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
                                "id": "googlepay.td.0333",
                                "value": "Customer abandons the cashier"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0334",
                                "value": "Purchase moves to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0335",
                                    "value": "expired"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0336",
                                "value": " after "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0337",
                                    "value": "expireInMin"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0338",
                                "value": "; no success webhook"
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
                                "id": "googlepay.td.0339",
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
                                "id": "googlepay.td.0340",
                                "value": "Same "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0341",
                                    "value": "merchantRef"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0342",
                                "value": " submitted twice"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0343",
                                "value": "Second purchase rejected as duplicate"
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
                                "id": "googlepay.td.0344",
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
                                "id": "googlepay.td.0345",
                                "value": "Webhook signature verification"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0346",
                                "value": "Tampered body rejected"
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
                                "id": "googlepay.td.0347",
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
                                "id": "googlepay.td.0348",
                                "value": "DIRECT only: key rotation in sandbox"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0349",
                                "value": "Payments succeed with either key during the overlap"
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
                    "id": "googlepay.b.0350",
                    "value": "Go-live:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0351",
                "value": " console production access approved; Paysecure cashier domains registered; (DIRECT) production public key uploaded and production private key delivered; live API key generated ('Is Sandbox' unchecked); webhooks verified. Then run one live low-value Google Pay transaction per auth method and refund it through the dashboard."
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
                "id": "googlepay.h3.0352",
                "value": "Troubleshooting"
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
                                "id": "googlepay.th.0353",
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
                                "id": "googlepay.th.0354",
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
                                "id": "googlepay.td.0355",
                                "value": "Google Pay button doesn't appear on the cashier"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0356",
                                "value": "isReadyToPay returned false for that customer/device (unsupported browser, no usable card), or your console production approval / cashier-domain registration is incomplete"
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
                                "id": "googlepay.td.0357",
                                "value": "Works in sandbox but not live"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0358",
                                "value": "Console production access not granted yet, cashier domain missing from your console, or (DIRECT) production private key not delivered to Paysecure"
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
                                "id": "googlepay.td.0359",
                                "value": "All attempts fail after a key rotation (DIRECT)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0360",
                                "value": "New public key registered but the new private key didn't reach Paysecure; coordinate rotations with your onboarding manager"
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
                                "id": "googlepay.td.0361",
                                "value": "High 3DS challenge rate"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0362",
                                "value": "Mostly PAN_ONLY EEA traffic; expected under SCA. Ask Paysecure about TRA exemptions where eligible"
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
                                "id": "googlepay.td.0363",
                                "value": "Customer returned to success_redirect but no webhook"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0364",
                                "value": "Check webhook endpoint availability and signature validation; reconcile with Get Status, the API status is authoritative"
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
                                "id": "googlepay.td.0365",
                                "value": "Purchase stuck in payment_in_process"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0366",
                                "value": "Asynchronous authorisation still completing; poll Get Status, contact support if it persists beyond the expiry window"
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
                "id": "googlepay.h3.0367",
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
                    "id": "googlepay.b.0368",
                    "value": "Why do we need a Google console at all if Paysecure hosts the button?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0369",
                "value": " Google issues tokens against the merchant of record. Your console identity (Merchant ID), your production approval, and, for DIRECT, your keys are what authorise Google to release payment credentials for your transactions."
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
                    "id": "googlepay.b.0370",
                    "value": "Can we move to our own cashier later?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0371",
                "value": " Yes. Your console account carries over; you re-register your own domains, build the Google Pay JS, and follow the merchant-cashier section below. The Purchases API stays the same, with the Google Pay payload added in "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0372",
                    "value": "extraParam"
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
                    "id": "googlepay.b.0373",
                    "value": "Can we customise how the cashier looks?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0374",
                "value": " The cashier is brandable per Paysecure's standard cashier configuration (logo, colours, method ordering); Google Pay button artwork itself is fixed by Google's brand rules."
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
                    "id": "googlepay.b.0375",
                    "value": "Do refunds differ?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0376",
                "value": " No; standard Paysecure refund APIs apply, keyed by "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0377",
                    "value": "purchaseId"
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
                    "id": "googlepay.b.0378",
                    "value": "Does Paysecure see the customer's Google account?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0379",
                "value": " No; only the payment token Google releases for the transaction, which in PAYMENT_GATEWAY mode we cannot even decrypt."
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
                "id": "googlepay.merchant-cashier.0380",
                "value": "Google Pay on your merchant cashier"
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
                "id": "googlepay.p.0381",
                "value": "You host the Google Pay button, JavaScript, and branding on your own cashier page using your own Google account; Paysecure handles authorisation, routing, 3-D Secure, and settlement across the processor network. In every case the Google Pay payload travels to Paysecure inside "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0382",
                    "value": "extraParam.googlepay_param"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0383",
                "value": " of the standard purchase call; see the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-googlepay"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.doclink.0384",
                    "value": "Google Pay API reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0385",
                "value": ". Written for engineering teams building the cashier front end and backend teams integrating the Purchases API; working knowledge of REST APIs and JavaScript assumed."
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
                "id": "googlepay.h3.0386",
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
                                "id": "googlepay.th.0387",
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
                                "id": "googlepay.th.0388",
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
                                "id": "googlepay.th.0389",
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
                                "id": "googlepay.td.0390",
                                "value": "Cashier page, Google Pay JS, button & branding"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0391",
                                "value": "Yes; your own cashier and Google account"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0392",
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
                                "id": "googlepay.td.0393",
                                "value": "Console account and production approval"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0394",
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
                                "id": "googlepay.td.0395",
                                "value": "Guidance and gateway parameters"
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
                                "id": "googlepay.td.0396",
                                "value": "Token decryption: PAYMENT_GATEWAY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0397",
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
                                "id": "googlepay.td.0398",
                                "value": "No; the assigned processor decrypts in its PCI zone"
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
                                "id": "googlepay.td.0399",
                                "value": "Token decryption: DIRECT, encrypted submission"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0400",
                                "value": "No; you share your private key with Paysecure"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0401",
                                "value": "Yes, inside Paysecure's PCI environment"
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
                                "id": "googlepay.td.0402",
                                "value": "Token decryption: DIRECT, decrypted submission"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0403",
                                "value": "Yes; your private key, your servers (Tink)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0404",
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
                                "id": "googlepay.td.0405",
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
                                "id": "googlepay.td.0406",
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
                                "id": "googlepay.td.0407",
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
                                "id": "googlepay.td.0408",
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
                                "id": "googlepay.td.0409",
                                "value": "Minimal, except DIRECT-decrypted (SAQ D)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0410",
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
                "id": "googlepay.h3.0411",
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
                "id": "googlepay.p.0412",
                "value": "Three combinations are available. They differ only in who decrypts the token and what you submit to Paysecure; the cashier JavaScript and the API envelope stay the same."
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
                                "id": "googlepay.th.0413",
                                "value": "PAYMENT_GATEWAY"
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
                                "id": "googlepay.th.0414",
                                "value": "DIRECT, encrypted submission"
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
                                "id": "googlepay.th.0415",
                                "value": "DIRECT, decrypted submission"
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
                                    "id": "googlepay.b.0416",
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
                                "id": "googlepay.td.0417",
                                "value": "Assigned processor's keys (Paysafe, Shift4, PayNearMe, etc.)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0418",
                                "value": "Your public key"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0419",
                                "value": "Your public key"
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
                                    "id": "googlepay.b.0420",
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
                                "id": "googlepay.td.0421",
                                "value": "The processor, in its PCI zone; never Paysecure"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0422",
                                "value": "Paysecure, with the private key you share at onboarding"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0423",
                                "value": "You, on your servers (Tink)"
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
                                    "id": "googlepay.b.0424",
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
                                    "id": "googlepay.code.0425",
                                    "value": "googlepay_encrypted_payload"
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
                                    "id": "googlepay.code.0426",
                                    "value": "googlepay_encrypted_payload"
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
                                    "id": "googlepay.code.0427",
                                    "value": "googlepay_decrypted_payload"
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
                                    "id": "googlepay.b.0428",
                                    "value": "Key management"
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
                                "id": "googlepay.td.0429",
                                "value": "None for you"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0430",
                                "value": "Generate, register, share securely, rotate annually"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0431",
                                "value": "Generate, register, rotate, and protect keys yourself"
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
                                    "id": "googlepay.b.0432",
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
                                "id": "googlepay.td.0433",
                                "value": "Minimal; token is opaque to you"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0434",
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
                                "id": "googlepay.td.0435",
                                "value": "Full SAQ D; you handle decrypted FPAN/DPAN"
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
                                    "id": "googlepay.b.0436",
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
                                "id": "googlepay.td.0437",
                                "value": "Low"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0438",
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
                                "id": "googlepay.td.0439",
                                "value": "High: signature verification, decryption, replay and expiry checks"
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
                                    "id": "googlepay.b.0440",
                                    "value": "Routing"
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
                                "id": "googlepay.td.0441",
                                "value": "Pinned to the token's processor"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0442",
                                "value": "Flexible across Paysecure's network"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0443",
                                "value": "Flexible across Paysecure's network"
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
                        "id": "googlepay.b.0444",
                        "value": "Paysecure recommendation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0445",
                    "value": " most merchants should start with DIRECT encrypted submission: minimal engineering, no PAN exposure, and routing stays flexible. Choose PAYMENT_GATEWAY when your brand is anchored to one processor; choose decrypted submission only if you already run a PCI SAQ D environment and need the raw credential."
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
                "id": "googlepay.h3.0446",
                "value": "Flow 1: PAYMENT_GATEWAY"
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
                      "src": "/assets/googlepay-merchant-payment-gateway.png",
                      "alt": "PAYMENT_GATEWAY flow on the merchant cashier",
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
                    "id": "googlepay.figcaption.0447",
                    "value": "Figure 7 · PAYMENT_GATEWAY flow: the assigned processor decrypts; Paysecure orchestrates but never sees card data"
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
                    "id": "googlepay.li.0448",
                    "value": "Customer clicks the Google Pay button on your cashier; your page calls "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0449",
                        "value": "loadPaymentData()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0450",
                    "value": " with a PAYMENT_GATEWAY tokenisation specification naming the processor Paysecure assigned to your brand."
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
                    "id": "googlepay.li.0451",
                    "value": "Google shows the payment sheet; the customer picks a card and confirms (screen lock or biometric where applicable)."
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
                    "id": "googlepay.li.0452",
                    "value": "Google encrypts the credential to the processor's public key and returns the token in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0453",
                        "value": "paymentData.paymentMethodData.tokenizationData.token"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0454",
                    "value": ": an opaque JSON string from your perspective (and from Paysecure's)."
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
                    "id": "googlepay.li.0455",
                    "value": "Your cashier posts the token string to your backend over HTTPS. Do not parse, re-encode, trim, or otherwise modify it."
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
                    "id": "googlepay.li.0456",
                    "value": "Your backend creates the purchase with the token verbatim in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0457",
                        "value": "googlepay_encrypted_payload"
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
                    "id": "googlepay.li.0458",
                    "value": "Paysecure validates the envelope and forwards it to the assigned processor (e.g. Paysafe, Shift4, PayNearMe), which verifies Google's signature chain, decrypts inside its PCI zone, and authorises through the card network."
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
                    "id": "googlepay.li.0459",
                    "value": "For PAN_ONLY credentials in SCA markets, additional 3-D Secure may be triggered; the customer returns via your redirect URLs."
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
                    "id": "googlepay.li.0460",
                    "value": "Paysecure returns the purchase result and fires the webhook; you show the confirmation page."
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
                        "id": "googlepay.span.0461",
                        "value": "tokenizationSpecification (PAYMENT_GATEWAY)"
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
                        "id": "googlepay.button.0462",
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
                    "id": "googlepay.pre.0463",
                    "value": "const tokenizationSpecification = {\n  type: "
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
                        "id": "googlepay.span.0464",
                        "value": "\"PAYMENT_GATEWAY\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0465",
                    "value": ",\n  parameters: {\n    gateway: "
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
                        "id": "googlepay.span.0466",
                        "value": "\"PROCESSOR_GATEWAY_ID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",               "
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
                        "id": "googlepay.span.0467",
                        "value": "// e.g. \"paysafe\", \"shift4\", \"paynearme\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0468",
                    "value": "\n    gatewayMerchantId: "
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
                        "id": "googlepay.span.0469",
                        "value": "\"YOUR_GATEWAY_MERCHANT_ID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "  "
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
                        "id": "googlepay.span.0470",
                        "value": "// issued by your gateway"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  }\n};"
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
                        "id": "googlepay.b.0471",
                        "value": "Both values come from your gateway, not from Google."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0472",
                    "value": " Because Google encrypts the token to the named processor, the transaction is pinned to that processor; to reroute later you need values for the new gateway and a cashier configuration update."
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
                    "id": "googlepay.b.0473",
                    "value": "What you must never do with the token:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0474",
                "value": " never log it in full (log a SHA-256 hash or the first/last 8 characters for correlation); never store it (single-use, short-lived); never try to decrypt or inspect it (neither you nor Paysecure can; only the processor holds the keys); and submit it promptly, since Google tokens carry a short message expiration; treat anything older than a few minutes as stale and ask the customer to retry."
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
                "id": "googlepay.h3.0475",
                "value": "Flow 2: DIRECT"
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
                "id": "googlepay.p.0476",
                "value": "Google encrypts the credential to your public key. What happens next depends on the submission mode agreed with Paysecure at onboarding:"
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
                                "id": "googlepay.th.0477",
                                "value": "Encrypted submission (recommended)"
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
                                "id": "googlepay.th.0478",
                                "value": "Decrypted submission"
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
                                    "id": "googlepay.b.0479",
                                    "value": "What you send"
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
                                "id": "googlepay.td.0480",
                                "value": "The encrypted token, verbatim, in "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0481",
                                    "value": "googlepay_encrypted_payload"
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
                                "id": "googlepay.td.0482",
                                "value": "The decrypted message, in "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0483",
                                    "value": "googlepay_decrypted_payload"
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
                                    "id": "googlepay.b.0484",
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
                                "id": "googlepay.td.0485",
                                "value": "Paysecure, inside our PCI environment, with your shared private key"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0486",
                                "value": "You: verify Google's signature chain, then decrypt"
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
                                    "id": "googlepay.b.0487",
                                    "value": "PCI impact"
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
                                "id": "googlepay.td.0488",
                                "value": "You never see the PAN; reduced scope"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0489",
                                "value": "PAN on your side: full PCI DSS (SAQ D)"
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
                      "src": "/assets/googlepay-merchant-direct-encrypted.png",
                      "alt": "DIRECT encrypted submission flow",
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
                    "id": "googlepay.figcaption.0490",
                    "value": "Figure 8 · DIRECT, encrypted submission: Paysecure decrypts with your shared private key"
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
                      "src": "/assets/googlepay-merchant-direct-decrypted.png",
                      "alt": "DIRECT decrypted submission flow",
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
                    "id": "googlepay.figcaption.0491",
                    "value": "Figure 9 · DIRECT, decrypted submission: you decrypt with Tink and send the decrypted payload"
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
                "id": "googlepay.p.0492",
                "value": "Generate your key pair per the "
              },
              {
                "type": "element",
                "tag": "a",
                "props": {
                  "className": "inline",
                  "href": "#google-account"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.a.0493",
                    "value": "Google account setup"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0494",
                "value": ". The same public key goes into your JavaScript:"
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
                        "id": "googlepay.span.0495",
                        "value": "tokenizationSpecification (DIRECT)"
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
                        "id": "googlepay.button.0496",
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
                    "id": "googlepay.pre.0497",
                    "value": "const tokenizationSpecification = {\n  type: "
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
                        "id": "googlepay.span.0498",
                        "value": "\"DIRECT\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0499",
                    "value": ",\n  parameters: {\n    protocolVersion: "
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
                        "id": "googlepay.span.0500",
                        "value": "\"ECv2\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0501",
                    "value": ",\n    publicKey: "
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
                        "id": "googlepay.span.0502",
                        "value": "\"BASE64_UNCOMPRESSED_P256_PUBLIC_KEY\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  }\n};"
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
                "id": "googlepay.h3.0503",
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
                        "id": "googlepay.b.0504",
                        "value": "Storage:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0505",
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
                        "id": "googlepay.b.0506",
                        "value": "Sharing with Paysecure (encrypted submission only):"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0507",
                    "value": " transmit the PKCS#8 private key through the secure channel agreed with your onboarding manager, an encrypted vault exchange or equivalent. Never send private keys over email, chat, or ticketing tools."
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
                        "id": "googlepay.b.0508",
                        "value": "Rotation:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0509",
                    "value": " at least annually. Register the new public key alongside the old one, deliver the new private key (to your decryption service, and to Paysecure in the encrypted mode), run both in parallel, then delete the old key from the console and retire it."
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
                        "id": "googlepay.b.0510",
                        "value": "Compromise:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0511",
                    "value": " if a private key may have leaked, remove its public key from the console immediately (Google stops encrypting to it within minutes), then rotate and notify Paysecure."
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
                        "id": "googlepay.b.0512",
                        "value": "Per-environment keys:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0513",
                    "value": " use different key pairs for TEST and PRODUCTION."
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
                "id": "googlepay.h3.0514",
                "value": "Encrypted submission: what your backend does"
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
                    "id": "googlepay.li.0515",
                    "value": "Receive "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0516",
                        "value": "tokenizationData.token"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0517",
                    "value": " from your cashier and treat it as an opaque string; no parsing or re-encoding."
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
                    "id": "googlepay.li.0518",
                    "value": "Create the purchase with the string in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0519",
                        "value": "googlepay_encrypted_payload"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0520",
                    "value": " and your console Merchant ID in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0521",
                        "value": "google_merchant_id"
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
                    "id": "googlepay.li.0522",
                    "value": "Handle the response, redirects, and webhook exactly as for any Paysecure purchase."
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
                "id": "googlepay.h3.0523",
                "value": "Decrypted submission: verify and decrypt the token (ECv2)"
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
                "id": "googlepay.p.0524",
                "value": "The token your cashier receives is a JSON string with this shape:"
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
                        "id": "googlepay.span.0525",
                        "value": "ECv2 token shape"
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
                        "id": "googlepay.button.0526",
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
                        "id": "googlepay.span.0527",
                        "value": "\"protocolVersion\""
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
                        "id": "googlepay.span.0528",
                        "value": "\"ECv2\""
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
                        "id": "googlepay.span.0529",
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
                        "id": "googlepay.span.0530",
                        "value": "\"MEQCIH6Q4OwQ…\""
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
                        "id": "googlepay.span.0531",
                        "value": "\"intermediateSigningKey\""
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
                        "id": "googlepay.span.0532",
                        "value": "\"signedKey\""
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
                        "id": "googlepay.span.0533",
                        "value": "\"{\\\"keyValue\\\":\\\"MFkwEwYH…\\\", \\\"keyExpiration\\\":\\\"1879409613000\\\"}\""
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
                        "id": "googlepay.span.0534",
                        "value": "\"signatures\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [ "
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
                        "id": "googlepay.span.0535",
                        "value": "\"MEYCIQDh0V6Vd9…\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " ]\n  },\n  "
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
                        "id": "googlepay.span.0536",
                        "value": "\"signedMessage\""
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
                        "id": "googlepay.span.0537",
                        "value": "\"{\\\"encryptedMessage\\\":\\\"qGy5g6cM…\\\", \\\"ephemeralPublicKey\\\":\\\"BPpcgnCsAofL…\\\", \\\"tag\\\":\\\"hr2bKVL08imm…\\\"}\""
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
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "googlepay.p.0538",
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
                        "id": "googlepay.b.0539",
                        "value": "Fetch Google's root signing keys and cache them:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0540",
                    "value": " TEST "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0541",
                        "value": "payments.developers.google.com/paymentmethodtoken/test/keys.json"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0542",
                    "value": ", PRODUCTION "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0543",
                        "value": "payments.developers.google.com/paymentmethodtoken/keys.json"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0544",
                    "value": ". Respect HTTP cache headers, refresh at least annually, and ignore root keys whose own expiry has passed."
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
                        "id": "googlepay.b.0545",
                        "value": "Verify the intermediate signing key:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0546",
                    "value": " at least one signature in "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0547",
                        "value": "intermediateSigningKey.signatures"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0548",
                    "value": " must validate (ECDSA-SHA256) against a non-expired root key, and the intermediate key's "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0549",
                        "value": "keyExpiration"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0550",
                    "value": " must be in the future."
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
                        "id": "googlepay.b.0551",
                        "value": "Verify the payload signature"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0552",
                    "value": " against the intermediate key over the length-prefixed concatenation of: sender ID "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0553",
                        "value": "Google"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0554",
                    "value": ", your recipient ID "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0555",
                        "value": "merchant:YOUR_GOOGLE_MERCHANT_ID"
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
                        "id": "googlepay.code.0556",
                        "value": "ECv2"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0557",
                    "value": ", and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0558",
                        "value": "signedMessage"
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
                        "id": "googlepay.b.0559",
                        "value": "Decrypt "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.code.0560",
                            "value": "encryptedMessage"
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
                    "id": "googlepay.li.0561",
                    "value": " derive the shared secret via ECDH between "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0562",
                        "value": "ephemeralPublicKey"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0563",
                    "value": " and your private key, expand with HKDF-SHA256, verify the HMAC-SHA256 tag, then decrypt AES-256-CTR."
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
                        "id": "googlepay.b.0564",
                        "value": "Validate "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.code.0565",
                            "value": "messageExpiration"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0566",
                    "value": " (UTC milliseconds) is in the future, and use "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0567",
                        "value": "messageId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0568",
                    "value": " for idempotency and replay detection on your side."
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
                        "id": "googlepay.b.0569",
                        "value": "Do not hand-roll steps 1 to 4."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0570",
                    "value": " Use Google's Tink "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0571",
                        "value": "paymentmethodtoken"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.p.0572",
                    "value": " library, which implements the whole chain and supports multiple private keys for rotation."
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
                        "id": "googlepay.span.0573",
                        "value": "Java (Tink), the reference implementation"
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
                        "id": "googlepay.button.0574",
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
                    "id": "googlepay.pre.0575",
                    "value": "GooglePaymentsPublicKeysManager keysManager =\n    GooglePaymentsPublicKeysManager.INSTANCE_PRODUCTION; "
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
                        "id": "googlepay.span.0576",
                        "value": "// or _TEST"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0577",
                    "value": "\n\nPaymentMethodTokenRecipient recipient =\n    new PaymentMethodTokenRecipient.Builder()\n        .fetchSenderVerifyingKeysWith(keysManager)\n        .recipientId("
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
                        "id": "googlepay.span.0578",
                        "value": "\"merchant:YOUR_GOOGLE_MERCHANT_ID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0579",
                    "value": ")\n        .protocolVersion("
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
                        "id": "googlepay.span.0580",
                        "value": "\"ECv2\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0581",
                    "value": ")\n        .addRecipientPrivateKey(BASE64_PKCS8_PRIVATE_KEY_NEW)  "
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
                        "id": "googlepay.span.0582",
                        "value": "// try first"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0583",
                    "value": "\n        .addRecipientPrivateKey(BASE64_PKCS8_PRIVATE_KEY_OLD)  "
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
                        "id": "googlepay.span.0584",
                        "value": "// rotation overlap"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0585",
                    "value": "\n        .build();\n\nString decryptedJson = recipient.unseal(tokenJsonString);"
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
                "id": "googlepay.p.0586",
                "value": "The decrypted message is what you submit verbatim as "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0587",
                    "value": "googlepay_decrypted_payload"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0588",
                "value": "; the field-by-field spec lives in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-googlepay#decrypted"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.doclink.0589",
                    "value": "API reference"
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
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "googlepay.h3.0590",
                "value": "Building your cashier: the Google Pay JavaScript"
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
                "id": "googlepay.p.0591",
                "value": "You render Google Pay with Google's "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0592",
                    "value": "pay.js"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0593",
                "value": " library. The flow is identical for PAYMENT_GATEWAY and DIRECT; only the tokenisation specification differs. Full reference: developers.google.com/pay/api/web."
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
                        "id": "googlepay.span.0594",
                        "value": "Load the library"
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
                        "id": "googlepay.button.0595",
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
                    "id": "googlepay.pre.0596",
                    "value": "<script async\n  src="
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
                        "id": "googlepay.span.0597",
                        "value": "\"https://pay.google.com/gp/p/js/pay.js\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0598",
                    "value": "\n  onload="
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
                        "id": "googlepay.span.0599",
                        "value": "\"onGooglePayLoaded()\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0600",
                    "value": "></script>"
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
                        "id": "googlepay.span.0601",
                        "value": "Complete working example (PAYMENT_GATEWAY)"
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
                        "id": "googlepay.button.0602",
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
                    "id": "googlepay.pre.0603",
                    "value": "const baseRequest = { apiVersion: "
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
                        "id": "googlepay.span.0604",
                        "value": "2"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0605",
                    "value": ", apiVersionMinor: "
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
                        "id": "googlepay.span.0606",
                        "value": "0"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0607",
                    "value": " };\n\nconst tokenizationSpecification = {\n  type: "
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
                        "id": "googlepay.span.0608",
                        "value": "\"PAYMENT_GATEWAY\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0609",
                    "value": ",\n  parameters: {\n    gateway: "
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
                        "id": "googlepay.span.0610",
                        "value": "\"PROCESSOR_GATEWAY_ID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",               "
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
                        "id": "googlepay.span.0611",
                        "value": "// issued by your gateway"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0612",
                    "value": "\n    gatewayMerchantId: "
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
                        "id": "googlepay.span.0613",
                        "value": "\"YOUR_GATEWAY_MERCHANT_ID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "  "
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
                        "id": "googlepay.span.0614",
                        "value": "// issued by your gateway"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0615",
                    "value": "\n  }\n};\n\nconst baseCardPaymentMethod = {\n  type: "
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
                        "id": "googlepay.span.0616",
                        "value": "\"CARD\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0617",
                    "value": ",\n  parameters: {\n    allowedAuthMethods: ["
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
                        "id": "googlepay.span.0618",
                        "value": "\"PAN_ONLY\""
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
                        "id": "googlepay.span.0619",
                        "value": "\"CRYPTOGRAM_3DS\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0620",
                    "value": "],\n    allowedCardNetworks: ["
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
                        "id": "googlepay.span.0621",
                        "value": "\"VISA\""
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
                        "id": "googlepay.span.0622",
                        "value": "\"MASTERCARD\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "],   "
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
                        "id": "googlepay.span.0623",
                        "value": "// extend per your Paysecure setup"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0624",
                    "value": "\n    billingAddressRequired: "
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
                        "id": "googlepay.span.0625",
                        "value": "true"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0626",
                    "value": ",\n    billingAddressParameters: { format: "
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
                        "id": "googlepay.span.0627",
                        "value": "\"FULL\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0628",
                    "value": ", phoneNumberRequired: "
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
                        "id": "googlepay.span.0629",
                        "value": "false"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0630",
                    "value": " },\n    assuranceDetailsRequired: "
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
                        "id": "googlepay.span.0631",
                        "value": "true"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0632",
                    "value": "\n  }\n};\n\nconst cardPaymentMethod = Object.assign(\n  { tokenizationSpecification }, baseCardPaymentMethod);\n\nlet paymentsClient = null;\nfunction getPaymentsClient() {\n  if (!paymentsClient) {\n    paymentsClient = new google.payments.api.PaymentsClient({\n      environment: "
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
                        "id": "googlepay.span.0633",
                        "value": "\"TEST\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "   "
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
                        "id": "googlepay.span.0634",
                        "value": "// switch to \"PRODUCTION\" after Google approval"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0635",
                    "value": "\n    });\n  }\n  return paymentsClient;\n}\n\n"
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
                        "id": "googlepay.span.0636",
                        "value": "// 1 · Feature-detect and render the button"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0637",
                    "value": "\nfunction onGooglePayLoaded() {\n  const isReadyToPayRequest = Object.assign({}, baseRequest,\n    { allowedPaymentMethods: [baseCardPaymentMethod] });\n  getPaymentsClient().isReadyToPay(isReadyToPayRequest)\n    .then(res => { if (res.result) addGooglePayButton(); })\n    .catch(console.error);\n}\n\nfunction addGooglePayButton() {\n  const button = getPaymentsClient().createButton({\n    onClick: onGooglePayClicked,\n    buttonColor: "
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
                        "id": "googlepay.span.0638",
                        "value": "\"black\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",      "
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
                        "id": "googlepay.span.0639",
                        "value": "// \"black\" | \"white\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0640",
                    "value": "\n    buttonType: "
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
                        "id": "googlepay.span.0641",
                        "value": "\"pay\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",         "
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
                        "id": "googlepay.span.0642",
                        "value": "// \"pay\" | \"buy\" | \"checkout\" | \"order\" | …"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0643",
                    "value": "\n    buttonSizeMode: "
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
                        "id": "googlepay.span.0644",
                        "value": "\"fill\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0645",
                    "value": "\n  });\n  document.getElementById("
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
                        "id": "googlepay.span.0646",
                        "value": "\"gpay-container\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0647",
                    "value": ").appendChild(button);\n}\n\n"
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
                        "id": "googlepay.span.0648",
                        "value": "// 2 · Open the payment sheet"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0649",
                    "value": "\nfunction onGooglePayClicked() {\n  const paymentDataRequest = Object.assign({}, baseRequest, {\n    allowedPaymentMethods: [cardPaymentMethod],\n    transactionInfo: {\n      totalPriceStatus: "
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
                        "id": "googlepay.span.0650",
                        "value": "\"FINAL\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0651",
                    "value": ",\n      totalPrice: "
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
                        "id": "googlepay.span.0652",
                        "value": "\"104.99\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0653",
                    "value": ",\n      currencyCode: "
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
                        "id": "googlepay.span.0654",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0655",
                    "value": ",\n      countryCode: "
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
                        "id": "googlepay.span.0656",
                        "value": "\"MT\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "        "
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
                        "id": "googlepay.span.0657",
                        "value": "// required for SCA/EEA processing"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0658",
                    "value": "\n    },\n    merchantInfo: {\n      merchantId: "
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
                        "id": "googlepay.span.0659",
                        "value": "\"YOUR_GOOGLE_MERCHANT_ID\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",  "
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
                        "id": "googlepay.span.0660",
                        "value": "// from the Wallet Console (PROD only)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0661",
                    "value": "\n      merchantName: "
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
                        "id": "googlepay.span.0662",
                        "value": "\"Your Store Name\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0663",
                    "value": "\n    }\n  });\n\n  getPaymentsClient().loadPaymentData(paymentDataRequest)\n    .then(paymentData => {\n      "
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
                        "id": "googlepay.span.0664",
                        "value": "// 3 · The encrypted token: forward verbatim to your backend"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0665",
                    "value": "\n      const token = paymentData.paymentMethodData.tokenizationData.token;\n      return fetch("
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
                        "id": "googlepay.span.0666",
                        "value": "\"/cashier/googlepay\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0667",
                    "value": ", {\n        method: "
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
                        "id": "googlepay.span.0668",
                        "value": "\"POST\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0669",
                    "value": ",\n        headers: { "
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
                        "id": "googlepay.span.0670",
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
                        "id": "googlepay.span.0671",
                        "value": "\"application/json\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0672",
                    "value": " },\n        body: JSON.stringify({ token })\n      });\n    })\n    .catch(err => {\n      if (err.statusCode !== "
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
                        "id": "googlepay.span.0673",
                        "value": "\"CANCELED\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.pre.0674",
                    "value": ") console.error(err);\n    });\n}"
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
                    "id": "googlepay.b.0675",
                    "value": "The only change for DIRECT"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0676",
                "value": " is the tokenisation specification (shown above under Flow 2)."
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
                                "id": "googlepay.th.0677",
                                "value": "TEST"
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
                                "id": "googlepay.th.0678",
                                "value": "PRODUCTION"
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
                                    "id": "googlepay.b.0679",
                                    "value": "Google environment flag"
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
                                    "id": "googlepay.code.0680",
                                    "value": "environment: \"TEST\""
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
                                    "id": "googlepay.code.0681",
                                    "value": "environment: \"PRODUCTION\""
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
                                    "id": "googlepay.b.0682",
                                    "value": "Console approval needed"
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
                                "id": "googlepay.td.0683",
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
                                "id": "googlepay.td.0684",
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
                                    "id": "googlepay.b.0685",
                                    "value": "merchantInfo.merchantId"
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
                                "id": "googlepay.td.0686",
                                "value": "Optional"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0687",
                                "value": "Required; your Wallet Console Merchant ID"
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
                                    "id": "googlepay.b.0688",
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
                                "id": "googlepay.td.0689",
                                "value": "Dummy credentials; never chargeable"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0690",
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
                                    "id": "googlepay.b.0691",
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
                                "id": "googlepay.td.0692",
                                "value": "API key generated with 'Is Sandbox' checked"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0693",
                                "value": "API key generated with 'Is Sandbox' unchecked"
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
                "id": "googlepay.h3.0694",
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
                "id": "googlepay.p.0695",
                "value": "Because the cashier is yours, you are responsible for meeting Google's brand guidelines; Google reviews your screenshots against them before granting production access, and can revoke access for violations. Authoritative sources: the Google Pay brand guidelines and the Acceptable Use Policy."
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
                    "id": "googlepay.b.0696",
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
                    "id": "googlepay.li.0697",
                    "value": "Always generate the button with "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0698",
                        "value": "paymentsClient.createButton()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0699",
                    "value": "; never build your own, screenshot it, or recolour it. The API serves correctly localised, up-to-date artwork."
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
                    "id": "googlepay.li.0700",
                    "value": "Choose "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0701",
                        "value": "buttonColor"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0702",
                    "value": " for contrast: black on light backgrounds, white on dark. Maintain the button's built-in shape and a minimum 8 dp clear space on all sides."
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
                    "id": "googlepay.li.0703",
                    "value": "Pick a "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0704",
                        "value": "buttonType"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0705",
                    "value": " that matches the action (pay, buy, checkout, order, donate, subscribe, or plain)."
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
                    "id": "googlepay.li.0706",
                    "value": "Make the Google Pay button at least as prominent as other payment buttons on the page: same size class and visual weight."
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
                    "id": "googlepay.b.0707",
                    "value": "The Google Pay mark in payment method lists:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0708",
                "value": " use the official mark asset from Google's brand package, unmodified, at the same size as other scheme logos. Refer to it in copy as \"Google Pay\", never \"GPay\", \"google pay\", or a translated name; on first prominent use include the ™ symbol (Google Pay™)."
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
                    "id": "googlepay.b.0709",
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
                    "id": "googlepay.li.0710",
                    "value": "Don't show the button before "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0711",
                        "value": "isReadyToPay()"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0712",
                    "value": " resolves true (no greyed-out or decorative buttons)."
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
                    "id": "googlepay.li.0713",
                    "value": "Don't wrap the button in your own border, shadow, or pill; don't change its corner radius or aspect ratio."
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
                    "id": "googlepay.li.0714",
                    "value": "Don't use Google Pay branding in ads or emails implying Google endorsement of your business."
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
                    "id": "googlepay.li.0715",
                    "value": "Don't surcharge or penalise Google Pay relative to other card payments where local law or scheme rules prohibit it."
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
                    "id": "googlepay.b.0716",
                    "value": "Conditions you accept via Google's ToS:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0717",
                "value": " serve the cashier over HTTPS with valid TLS on a registered domain; only request Google Pay for payment categories permitted by the Acceptable Use Policy (restricted verticals, including some regulated gaming markets, need Google's explicit approval for the relevant country); and honour Google's user-privacy requirements, using returned data (email, billing address) only for processing the transaction."
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
                "id": "googlepay.h3.0718",
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
                                "id": "googlepay.th.0719",
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
                                "id": "googlepay.th.0720",
                                "value": "What you send Paysecure"
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
                                "id": "googlepay.th.0721",
                                "value": "Who decrypts"
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
                                "id": "googlepay.th.0722",
                                "value": "3-D Secure"
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
                                "id": "googlepay.th.0723",
                                "value": "Typical liability"
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
                                "id": "googlepay.td.0724",
                                "value": "PAYMENT_GATEWAY + PAN_ONLY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0725",
                                "value": "Encrypted payload"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0726",
                                "value": "Processor"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0727",
                                "value": "Challenge likely in SCA markets"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0728",
                                "value": "Issuer after 3DS; else merchant"
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
                                "id": "googlepay.td.0729",
                                "value": "PAYMENT_GATEWAY + CRYPTOGRAM_3DS"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0730",
                                "value": "Encrypted payload"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0731",
                                "value": "Processor"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0732",
                                "value": "Usually none; cryptogram carries auth"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0733",
                                "value": "Issuer (network rules)"
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
                                "id": "googlepay.td.0734",
                                "value": "DIRECT-encrypted + PAN_ONLY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0735",
                                "value": "Encrypted payload"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0736",
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
                                "id": "googlepay.td.0737",
                                "value": "Challenge likely in SCA markets"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0738",
                                "value": "Issuer after 3DS; else merchant"
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
                                "id": "googlepay.td.0739",
                                "value": "DIRECT-encrypted + CRYPTOGRAM_3DS"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0740",
                                "value": "Encrypted payload"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0741",
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
                                "id": "googlepay.td.0742",
                                "value": "Usually none"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0743",
                                "value": "Issuer (network rules)"
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
                                "id": "googlepay.td.0744",
                                "value": "DIRECT-decrypted + PAN_ONLY"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0745",
                                "value": "Decrypted FPAN + expiry"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0746",
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
                                "id": "googlepay.td.0747",
                                "value": "Challenge likely in SCA markets"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0748",
                                "value": "Issuer after 3DS; else merchant"
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
                                "id": "googlepay.td.0749",
                                "value": "DIRECT-decrypted + CRYPTOGRAM_3DS"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0750",
                                "value": "Decrypted DPAN + cryptogram + ECI"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0751",
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
                                "id": "googlepay.td.0752",
                                "value": "Usually none"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0753",
                                "value": "Issuer (network rules)"
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
                    "id": "googlepay.b.0754",
                    "value": "ECI values you will see:"
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
                                "id": "googlepay.th.0755",
                                "value": "Network"
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
                                "id": "googlepay.th.0756",
                                "value": "ECI"
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
                                "id": "googlepay.th.0757",
                                "value": "Meaning"
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
                                "id": "googlepay.td.0758",
                                "value": "Visa"
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
                                    "id": "googlepay.code.0759",
                                    "value": "05"
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
                                "id": "googlepay.td.0760",
                                "value": "Fully authenticated; liability shift applies"
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
                                "id": "googlepay.td.0761",
                                "value": "Visa"
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
                                    "id": "googlepay.code.0762",
                                    "value": "06"
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
                                "id": "googlepay.td.0763",
                                "value": "Attempted authentication"
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
                                "id": "googlepay.td.0764",
                                "value": "Visa"
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
                                    "id": "googlepay.code.0765",
                                    "value": "07"
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
                                "id": "googlepay.td.0766",
                                "value": "Not authenticated; no liability shift"
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
                                "id": "googlepay.td.0767",
                                "value": "Mastercard"
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
                                    "id": "googlepay.code.0768",
                                    "value": "02"
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
                                "id": "googlepay.td.0769",
                                "value": "Fully authenticated (Mastercard numbering differs from Visa)"
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
                                "id": "googlepay.td.0770",
                                "value": "Mastercard"
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
                                    "id": "googlepay.code.0771",
                                    "value": "01"
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
                                "id": "googlepay.td.0772",
                                "value": "Attempted"
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
                    "id": "googlepay.li.0773",
                    "value": "Never hardcode or alter the ECI. If Google supplies "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0774",
                        "value": "eciIndicator"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0775",
                    "value": ", it must reach the network unmodified; if absent, omit it and the processing side applies network defaults."
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
                    "id": "googlepay.li.0776",
                    "value": "Liability-shift treatment of device-token transactions differs by network and region; reconcile chargebacks against the auth method and ECI of each purchase."
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
                    "id": "googlepay.li.0777",
                    "value": "SCA/PSD2: CRYPTOGRAM_3DS generally qualifies as SCA-compliant. PAN_ONLY does not by itself; budget for 3DS challenges on EEA/UK traffic and always send "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0778",
                        "value": "transactionInfo.countryCode"
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
            "value": "\n\n      "
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "googlepay.h3.0779",
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
                "id": "googlepay.p.0780",
                "value": "Send the following to your onboarding manager before the first test transaction. Items marked secure channel must never travel over email, chat, or ticketing tools; your onboarding manager will set up an encrypted exchange."
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
                                "id": "googlepay.th.0781",
                                "value": "Item (all flows)"
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
                                "id": "googlepay.th.0782",
                                "value": "Details"
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
                                "id": "googlepay.td.0783",
                                "value": "Google Merchant ID"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0784",
                                "value": "From the Wallet Console header; configured as "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0785",
                                    "value": "merchant:<ID>"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0786",
                                "value": " and validated against your tokens"
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
                                "id": "googlepay.td.0787",
                                "value": "Cashier domains"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0788",
                                "value": "Every HTTPS domain that renders the button (must match your console registration)"
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
                                "id": "googlepay.td.0789",
                                "value": "Redirect URLs"
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
                                    "id": "googlepay.code.0790",
                                    "value": "success_redirect"
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
                                    "id": "googlepay.code.0791",
                                    "value": "pending_redirect"
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
                                    "id": "googlepay.code.0792",
                                    "value": "failure_redirect"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0793",
                                "value": " defaults for your brand"
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
                                "id": "googlepay.td.0794",
                                "value": "Webhook endpoints"
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
                                    "id": "googlepay.code.0795",
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
                                    "id": "googlepay.code.0796",
                                    "value": "failure_callback"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0797",
                                "value": " URLs"
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
                                "id": "googlepay.td.0798",
                                "value": "Markets & currencies"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0799",
                                "value": "Target countries, currencies, and expected card networks"
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
                                "id": "googlepay.td.0800",
                                "value": "Chosen flow"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0801",
                                "value": "PAYMENT_GATEWAY, DIRECT-encrypted, or DIRECT-decrypted"
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
                                "id": "googlepay.th.0802",
                                "value": "Flow"
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
                                "id": "googlepay.th.0803",
                                "value": "You share with Paysecure"
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
                                "id": "googlepay.th.0804",
                                "value": "Paysecure provides to you"
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
                                    "id": "googlepay.b.0805",
                                    "value": "PAYMENT_GATEWAY"
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
                                    "id": "googlepay.code.0806",
                                    "value": "gateway"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0807",
                                "value": " and "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0808",
                                    "value": "gatewayMerchantId"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0809",
                                "value": " for your tokenisation specification"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0810",
                                "value": "Nothing"
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
                                    "id": "googlepay.b.0811",
                                    "value": "DIRECT, encrypted"
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
                                "id": "googlepay.td.0812",
                                "value": "Your base64 PKCS#8 PRIVATE key (secure channel only) + matching public key; advance notice of every rotation"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0813",
                                "value": "Confirmation of key installation; rotation cut-over coordination"
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
                                    "id": "googlepay.b.0814",
                                    "value": "DIRECT, decrypted"
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
                                "id": "googlepay.td.0815",
                                "value": "Your PUBLIC key (for reference) and your PCI DSS attestation (SAQ D or ROC)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0816",
                                "value": "Nothing key-related; you keep the private key exclusively"
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
                    "id": "googlepay.b.0817",
                    "value": "What Paysecure issues at onboarding:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0818",
                "value": " your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0819",
                    "value": "brand_id"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0820",
                "value": "; API keys (generated in the dashboard, sandbox with 'Is Sandbox' checked); for PAYMENT_GATEWAY the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0821",
                    "value": "gateway"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0822",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0823",
                    "value": "gatewayMerchantId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0824",
                "value": " values where we manage the processor relationship; and the webhook signing key setup for verifying callback authenticity."
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
                "id": "googlepay.h3.0825",
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
                    "id": "googlepay.li.0826",
                    "value": "Set "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.code.0827",
                        "value": "environment: \"TEST\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "googlepay.li.0828",
                    "value": " in the PaymentsClient and use a Paysecure API key generated with 'Is Sandbox' checked."
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
                    "id": "googlepay.li.0829",
                    "value": "Join Google's test card suite with the same Google account; the payment sheet then offers test cards covering both auth methods and all networks."
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
                    "id": "googlepay.li.0830",
                    "value": "DIRECT: validate decryption against the TEST root keys URL and a TEST key pair before touching production keys; in the encrypted mode, hand the TEST private key to Paysecure first."
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
                                "id": "googlepay.th.0831",
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
                                "id": "googlepay.th.0832",
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
                                "id": "googlepay.td.0833",
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
                                "id": "googlepay.td.0834",
                                "value": "PAN_ONLY token, non-SCA market"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0835",
                                "value": "Webhook reports "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0836",
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
                                "id": "googlepay.td.0837",
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
                                "id": "googlepay.td.0838",
                                "value": "PAN_ONLY token, SCA market (EEA test brand)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0839",
                                "value": "Customer challenged via "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0840",
                                    "value": "checkout_url"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0841",
                                "value": " → returns to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0842",
                                    "value": "success_redirect"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0843",
                                "value": " → webhook "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0844",
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
                                "id": "googlepay.td.0845",
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
                                "id": "googlepay.td.0846",
                                "value": "CRYPTOGRAM_3DS token"
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
                                    "id": "googlepay.code.0847",
                                    "value": "paid"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0848",
                                "value": " without a challenge"
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
                                "id": "googlepay.td.0849",
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
                                "id": "googlepay.td.0850",
                                "value": "Stale token (wait past messageExpiration, then submit)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0851",
                                "value": "Purchase moves to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0852",
                                    "value": "error"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0853",
                                "value": "; reason in "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0854",
                                    "value": "transaction_data.attempts[].error"
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
                                "id": "googlepay.td.0855",
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
                                "id": "googlepay.td.0856",
                                "value": "Same token submitted twice"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0857",
                                "value": "Second attempt fails (replay)"
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
                                "id": "googlepay.td.0858",
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
                                "id": "googlepay.td.0859",
                                "value": "Same "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0860",
                                    "value": "merchantRef"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0861",
                                "value": " submitted twice"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0862",
                                "value": "Second purchase rejected as duplicate"
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
                                "id": "googlepay.td.0863",
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
                                "id": "googlepay.td.0864",
                                "value": "Customer cancels the payment sheet"
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
                                    "id": "googlepay.code.0865",
                                    "value": "loadPaymentData"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0866",
                                "value": " rejects with statusCode CANCELED; no API call made"
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
                                "id": "googlepay.td.0867",
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
                                "id": "googlepay.td.0868",
                                "value": "DIRECT only: rotate keys mid-session"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0869",
                                "value": "Tokens decrypt with either key during the overlap window"
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
                                "id": "googlepay.td.0870",
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
                                "id": "googlepay.td.0871",
                                "value": "Webhook signature verification"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0872",
                                "value": "Tampered body rejected"
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
                    "id": "googlepay.b.0873",
                    "value": "Go-live:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0874",
                "value": " Google production access approved, live domains registered, screenshots accepted, (DIRECT) production public key uploaded; cashier switched to "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0875",
                    "value": "environment: \"PRODUCTION\""
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0876",
                "value": " with "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0877",
                    "value": "merchantInfo.merchantId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0878",
                "value": " set and branding re-checked; backend on a live API key with webhooks signature-verified and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0879",
                    "value": "merchantRef"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0880",
                "value": " on every purchase; (DIRECT) production private key in HSM/KMS, delivered to Paysecure in the encrypted mode, and a key-rotation calendar entry created. Then run one live low-value transaction per auth method and refund it through the dashboard."
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
                "id": "googlepay.h3.0881",
                "value": "Troubleshooting"
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
                                "id": "googlepay.th.0882",
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
                                "id": "googlepay.th.0883",
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
                                "id": "googlepay.td.0884",
                                "value": "Button never renders"
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
                                    "id": "googlepay.code.0885",
                                    "value": "isReadyToPay"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0886",
                                "value": " returned false: unsupported browser/device, or "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0887",
                                    "value": "allowedAuthMethods"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0888",
                                "value": " restricted to CRYPTOGRAM_3DS on desktop. Check the console for pay.js errors"
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
                                "id": "googlepay.td.0889",
                                "value": "DEVELOPER_ERROR in the payment sheet"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0890",
                                "value": "Malformed PaymentDataRequest; most often missing "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0891",
                                    "value": "merchantInfo.merchantId"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0892",
                                "value": " in PRODUCTION or an invalid "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0893",
                                    "value": "allowedCardNetworks"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0894",
                                "value": " value"
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
                                "id": "googlepay.td.0895",
                                "value": "Every purchase fails with a token/signature error"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0896",
                                "value": "Environment mismatch: TEST token sent with a live API key (or vice versa), or "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0897",
                                    "value": "google_merchant_id"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0898",
                                "value": " doesn't match the console that produced the token"
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
                                "id": "googlepay.td.0899",
                                "value": "PAYMENT_GATEWAY purchases all decline after a routing change"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0900",
                                "value": "Your cashier still names the old processor; tokens are pinned to the processor they're encrypted to. Update "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0901",
                                    "value": "gateway"
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
                                    "id": "googlepay.code.0902",
                                    "value": "gatewayMerchantId"
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
                                "id": "googlepay.td.0903",
                                "value": "DIRECT decryption fails after key rotation"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0904",
                                "value": "New public key registered but the old private key retired too early; keep both active until the old console key is deleted"
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
                                "id": "googlepay.td.0905",
                                "value": "Works on Chrome, fails on iOS Safari"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0906",
                                "value": "Expected for CRYPTOGRAM_3DS-only configs; PAN_ONLY enables Google Pay in any browser where the user is signed in"
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
                                "id": "googlepay.td.0907",
                                "value": "High 3DS challenge rate"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0908",
                                "value": "Mostly PAN_ONLY EEA traffic; expected under SCA. Confirm "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "googlepay.code.0909",
                                    "value": "countryCode"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "googlepay.td.0910",
                                "value": " is sent; ask Paysecure about TRA exemptions where eligible"
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
                                "id": "googlepay.td.0911",
                                "value": "Google review rejected the integration"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0912",
                                "value": "Almost always branding: custom-drawn button, missing clear space, or button shown before isReadyToPay. Fix against the branding rules and resubmit"
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
                "id": "googlepay.h3.0913",
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
                    "id": "googlepay.b.0914",
                    "value": "Can we switch flows later?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0915",
                "value": " Yes; the API envelope never changes. PAYMENT_GATEWAY ↔ DIRECT requires console changes and new tokenisation values; encrypted ↔ decrypted submission within DIRECT only changes which "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0916",
                    "value": "googlepay_param"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0917",
                "value": " field you populate."
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
                    "id": "googlepay.b.0918",
                    "value": "Why can't Paysecure decrypt our PAYMENT_GATEWAY tokens?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0919",
                "value": " Google encrypts each token to the public keys of the named gateway; only the processor registered under that gateway ID holds the private keys. That is by design: card data goes straight from Google to the processor's PCI zone."
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
                    "id": "googlepay.b.0920",
                    "value": "Do refunds or captures differ for Google Pay?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0921",
                "value": " No; standard Paysecure refund APIs apply, keyed by "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "googlepay.code.0922",
                    "value": "purchaseId"
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
                    "id": "googlepay.b.0923",
                    "value": "Recurring payments?"
                  }
                ]
              },
              {
                "type": "text",
                "id": "googlepay.p.0924",
                "value": " Not supported with Google Pay at Paysecure right now."
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
                "id": "googlepay.references.0925",
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
                      "href": "https://developers.google.com/pay/api/web/overview"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.a.0926",
                        "value": "Google Pay Web API overview and tutorial"
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
                      "href": "https://developers.google.com/pay/api/web/reference/request-objects"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.a.0927",
                        "value": "Request objects reference (tokenizationSpecification, CardParameters)"
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
                      "href": "https://developers.google.com/pay/api/web/guides/resources/payment-data-cryptography"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.a.0928",
                        "value": "Payment data cryptography for merchants (DIRECT / ECv2)"
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
                      "href": "https://developers.google.com/pay/api/web/guides/test-and-deploy/publish-your-integration"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.a.0929",
                        "value": "Publish your integration (production access)"
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
                      "href": "https://developers.google.com/pay/api/web/guides/brand-guidelines"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "googlepay.a.0930",
                        "value": "Google Pay brand guidelines"
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
                "id": "googlepay.glossary.0931",
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
                                "id": "googlepay.th.0932",
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
                                "id": "googlepay.th.0933",
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
                                "id": "googlepay.td.0934",
                                "value": "FPAN"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0935",
                                "value": "Funding PAN: the real card number printed on the customer's card"
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
                                "id": "googlepay.td.0936",
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
                                "id": "googlepay.td.0937",
                                "value": "Device PAN: a network token substituting the FPAN on a specific device"
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
                                "id": "googlepay.td.0938",
                                "value": "TAVV / Cryptogram"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0939",
                                "value": "Single-use cryptographic value proving the token transaction was authorised on the device"
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
                                "id": "googlepay.td.0940",
                                "value": "ECI"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0941",
                                "value": "Electronic Commerce Indicator: authentication level flag passed to the card network"
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
                                "id": "googlepay.td.0942",
                                "value": "ECv2"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0943",
                                "value": "Google's current token signing/encryption protocol (ECDSA + ECIES)"
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
                                "id": "googlepay.td.0944",
                                "value": "Processor"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0945",
                                "value": "The PSP/acquirer-facing entity that decrypts PAYMENT_GATEWAY tokens and processes the authorisation (e.g. Paysafe, Shift4, PayNearMe)"
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
                                "id": "googlepay.td.0946",
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
                                "id": "googlepay.td.0947",
                                "value": "The Paysecure-hosted cashier page for a specific purchase"
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
                                "id": "googlepay.td.0948",
                                "value": "SCA"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0949",
                                "value": "Strong Customer Authentication: PSD2 requirement in the EEA/UK"
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
                                "id": "googlepay.td.0950",
                                "value": "MIT"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0951",
                                "value": "Merchant-Initiated Transaction: recurring/unscheduled charge without the customer present"
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
                                "id": "googlepay.td.0952",
                                "value": "CDE"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "googlepay.td.0953",
                                "value": "Cardholder Data Environment: the PCI-scoped part of your infrastructure"
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
                "id": "googlepay.p.0954",
                "value": "Google Pay is a trademark of Google LLC. Console figures are simplified illustrative reproductions. developer.paysecure.net remains the canonical source for field-level changes."
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
                "id": "googlepay.apis.0955",
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
                "id": "googlepay.p.0956",
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
                        "id": "googlepay.h4.0957",
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
                        "id": "googlepay.p.0958",
                        "value": "Redirect purchase, encrypted and decrypted S2S flows, field spec."
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
                        "id": "googlepay.h4.0959",
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
                        "id": "googlepay.p.0960",
                        "value": "The companion wallet: merchant validation, PKPaymentToken passthrough."
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
                  "updated": "Last updated 07 Jul 2026 · v2.4"
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
                      "href": "/cards"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.small.0961",
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
                            "id": "googlepay.b.0962",
                            "value": "← Cards"
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
                      "href": "/applepay"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "googlepay.small.0963",
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
                            "id": "googlepay.b.0964",
                            "value": "Apple Pay →"
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
