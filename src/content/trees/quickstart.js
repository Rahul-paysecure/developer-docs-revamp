import { defineDocument } from '../schema.js';

export const quickstartTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "quickstart",
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
                    "id": "quickstart.doclink.0001",
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
                  "href": "/getting-started"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.doclink.0002",
                    "value": "Get Started"
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
                "id": "quickstart.div.0003",
                "value": "Quickstart"
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
                "id": "quickstart.h1.0004",
                "value": "Accept your first payment in 10 minutes"
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
                "id": "quickstart.p.0005",
                "value": "Create a purchase, redirect to checkout, pay with a test card, and receive the webhook, the complete happy path, end to end."
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
                          "d": "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M22 4L12 14.01l-3-3"
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
                        "id": "quickstart.b.0006",
                        "value": "Before you start:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.p.0007",
                    "value": " you'll need a Paysecure dashboard account with a verified email, and your "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/sandbox-credentials"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.doclink.0008",
                        "value": "sandbox API key"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.p.0009",
                    "value": ". Both take under two minutes."
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
              "id": "step1"
            },
            "children": [
              {
                "type": "text",
                "id": "quickstart.step1.0010",
                "value": "1 · Authenticate"
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
                "id": "quickstart.p.0011",
                "value": "Every request carries your secret key as a Bearer token. Copy yours from "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.b.0012",
                    "value": "merchant dashboard → API Keys"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0013",
                "value": " (with "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.b.0014",
                    "value": "Is Sandbox"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0015",
                "value": " checked)."
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
                        "id": "quickstart.span.0016",
                        "value": "Authorization header"
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
                        "id": "quickstart.button.0017",
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
                    "id": "quickstart.pre.0018",
                    "value": "Authorization: Bearer "
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
                        "id": "quickstart.span.0019",
                        "value": "{{APIKey}}"
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
              "className": "callout danger"
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
                          "d": "M4.93 4.93l14.14 14.14"
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
                        "id": "quickstart.b.0020",
                        "value": "Never expose your secret key"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.p.0021",
                    "value": " in browser code, mobile apps, or public repos. Server-side only."
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
              "id": "step2"
            },
            "children": [
              {
                "type": "text",
                "id": "quickstart.step2.0022",
                "value": "2 · Create a purchase"
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
                "id": "quickstart.p.0023",
                "value": "A "
              },
              {
                "type": "element",
                "tag": "i",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.i.0024",
                    "value": "purchase"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0025",
                "value": " is Paysecure's payment object. Create one with the amount, currency, and customer details; the response contains a hosted "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0026",
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
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "code-tabs"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "button",
                        "props": {
                          "className": "on"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "quickstart.button.0027",
                            "value": "cURL"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "button",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "quickstart.button.0028",
                            "value": "Node.js"
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "button",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "quickstart.button.0029",
                            "value": "Python"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "\n          "
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
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
                        "id": "quickstart.button.0030",
                        "value": "Copy"
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
                "value": "\n        "
              },
              {
                "type": "element",
                "tag": "pre",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.pre.0031",
                    "value": "curl "
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
                        "id": "quickstart.span.0032",
                        "value": "https://api.paysecure.net/api/v1/purchases/"
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
                        "id": "quickstart.span.0033",
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
                        "id": "quickstart.span.0034",
                        "value": "\"Authorization: Bearer {{APIKey}}\""
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
                        "id": "quickstart.span.0035",
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
                        "id": "quickstart.span.0036",
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
                        "id": "quickstart.span.0037",
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
                        "id": "quickstart.span.0038",
                        "value": "'{\n    \"client\": { \"email\": \"test-buyer@example.com\" },\n    \"purchase\": {\n      \"currency\": \"EUR\",\n      \"products\": [{ \"name\": \"Test deposit\", \"price\": 20.00 }]\n    },\n    \"brand_id\": \"brd_9f2c81a5\",\n    \"success_redirect\": \"https://yoursite.com/pay/success\",\n    \"failure_redirect\": \"https://yoursite.com/pay/failure\"\n  }'"
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
                "props": {
                  "hidden": true
                },
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
                        "id": "quickstart.span.0039",
                        "value": "// npm install node-fetch"
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
                        "id": "quickstart.span.0040",
                        "value": "const"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0041",
                    "value": " res = "
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
                        "id": "quickstart.span.0042",
                        "value": "await"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0043",
                    "value": " fetch("
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
                        "id": "quickstart.span.0044",
                        "value": "'https://api.paysecure.net/api/v1/purchases/'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0045",
                    "value": ", {\n  method: "
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
                        "id": "quickstart.span.0046",
                        "value": "'POST'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0047",
                    "value": ",\n  headers: {\n    "
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
                        "id": "quickstart.span.0048",
                        "value": "Authorization"
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
                        "id": "quickstart.span.0049",
                        "value": "`Bearer ${process.env.PAYSECURE_KEY}`"
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
                        "id": "quickstart.span.0050",
                        "value": "'Content-Type'"
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
                        "id": "quickstart.span.0051",
                        "value": "'application/json'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0052",
                    "value": "\n  },\n  body: JSON.stringify({\n    client: { email: "
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
                        "id": "quickstart.span.0053",
                        "value": "'test-buyer@example.com'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0054",
                    "value": " },\n    purchase: { currency: "
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
                        "id": "quickstart.span.0055",
                        "value": "'EUR'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0056",
                    "value": ", products: [{ name: "
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
                        "id": "quickstart.span.0057",
                        "value": "'Test deposit'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0058",
                    "value": ", price: "
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
                        "id": "quickstart.span.0059",
                        "value": "20.00"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0060",
                    "value": " }] },\n    brand_id: "
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
                        "id": "quickstart.span.0061",
                        "value": "'brd_9f2c81a5'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0062",
                    "value": ",\n    success_redirect: "
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
                        "id": "quickstart.span.0063",
                        "value": "'https://yoursite.com/pay/success'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0064",
                    "value": ",\n    failure_redirect: "
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
                        "id": "quickstart.span.0065",
                        "value": "'https://yoursite.com/pay/failure'"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n  })\n});\n"
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
                        "id": "quickstart.span.0066",
                        "value": "const"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0067",
                    "value": " purchase = "
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
                        "id": "quickstart.span.0068",
                        "value": "await"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0069",
                    "value": " res.json();"
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
                "props": {
                  "hidden": true
                },
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
                        "id": "quickstart.span.0070",
                        "value": "# pip install requests"
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
                        "id": "quickstart.span.0071",
                        "value": "import"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0072",
                    "value": " requests, os\n\nres = requests.post(\n    "
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
                        "id": "quickstart.span.0073",
                        "value": "\"https://api.paysecure.net/api/v1/purchases/\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0074",
                    "value": ",\n    headers={"
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
                        "id": "quickstart.span.0075",
                        "value": "\"Authorization\""
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
                        "id": "quickstart.span.0076",
                        "value": "f\"Bearer {os.environ['PAYSECURE_KEY']}\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0077",
                    "value": "},\n    json={\n        "
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
                        "id": "quickstart.span.0078",
                        "value": "\"client\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {"
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
                        "id": "quickstart.span.0079",
                        "value": "\"email\""
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
                        "id": "quickstart.span.0080",
                        "value": "\"test-buyer@example.com\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "},\n        "
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
                        "id": "quickstart.span.0081",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": {"
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
                        "id": "quickstart.span.0082",
                        "value": "\"currency\""
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
                        "id": "quickstart.span.0083",
                        "value": "\"EUR\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n            "
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
                        "id": "quickstart.span.0084",
                        "value": "\"products\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [{"
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
                        "id": "quickstart.span.0085",
                        "value": "\"name\""
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
                        "id": "quickstart.span.0086",
                        "value": "\"Test deposit\""
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
                        "id": "quickstart.span.0087",
                        "value": "\"price\""
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
                        "id": "quickstart.span.0088",
                        "value": "20.00"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "}]},\n        "
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
                        "id": "quickstart.span.0089",
                        "value": "\"brand_id\""
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
                        "id": "quickstart.span.0090",
                        "value": "\"brd_9f2c81a5\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "quickstart.span.0091",
                        "value": "\"success_redirect\""
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
                        "id": "quickstart.span.0092",
                        "value": "\"https://yoursite.com/pay/success\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ",\n        "
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
                        "id": "quickstart.span.0093",
                        "value": "\"failure_redirect\""
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
                        "id": "quickstart.span.0094",
                        "value": "\"https://yoursite.com/pay/failure\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.pre.0095",
                    "value": ",\n    })\npurchase = res.json()"
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
                "id": "quickstart.p.0096",
                "value": "Prices are decimal: "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0097",
                    "value": "20.00"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0098",
                "value": " means €20.00. Your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0099",
                    "value": "brand_id"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0100",
                "value": " is in "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/dashboard-configuration"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.doclink.0101",
                    "value": "Dashboard → Brands"
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
                          "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "rect",
                        "props": {
                          "x": "8",
                          "y": "2",
                          "width": "8",
                          "height": "4",
                          "rx": "1"
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
                        "id": "quickstart.b.0102",
                        "value": "Production requests need the full client block"
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
                        "id": "quickstart.code.0103",
                        "value": "city"
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
                        "id": "quickstart.code.0104",
                        "value": "country"
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
                        "id": "quickstart.code.0105",
                        "value": "stateCode"
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
                        "id": "quickstart.code.0106",
                        "value": "street_address"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.p.0107",
                    "value": ", and "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.code.0108",
                        "value": "zip_code"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.p.0109",
                    "value": " are mandatory. Sandbox is lenient so the example above stays minimal; the complete list is in the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-reference#create-purchase"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.doclink.0110",
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
              "id": "step3"
            },
            "children": [
              {
                "type": "text",
                "id": "quickstart.step3.0111",
                "value": "3 · Redirect your customer"
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
                "id": "quickstart.p.0112",
                "value": "The response arrives with a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0113",
                    "value": "purchaseId"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0114",
                "value": " and a hosted checkout link:"
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
                        "id": "quickstart.span.0115",
                        "value": "202 Accepted"
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
                        "id": "quickstart.button.0116",
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
                        "id": "quickstart.span.0117",
                        "value": "\"purchaseId\""
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
                        "id": "quickstart.span.0118",
                        "value": "\"6a1d26a3d373e5fd3c44ae14\""
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
                        "id": "quickstart.span.0119",
                        "value": "\"status\""
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
                        "id": "quickstart.span.0120",
                        "value": "\"created\""
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
                        "id": "quickstart.span.0121",
                        "value": "\"checkout_url\""
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
                        "id": "quickstart.span.0122",
                        "value": "\"https://api.paysecure.net/payment/6a1d26a3…/\""
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
                        "id": "quickstart.span.0123",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": { "
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
                        "id": "quickstart.span.0124",
                        "value": "\"currency\""
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
                        "id": "quickstart.span.0125",
                        "value": "\"EUR\""
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
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.span.0126",
                        "value": "\"products\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [{ "
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
                        "id": "quickstart.span.0127",
                        "value": "\"name\""
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
                        "id": "quickstart.span.0128",
                        "value": "\"Test deposit\""
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
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.span.0129",
                        "value": "\"price\""
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
                        "id": "quickstart.span.0130",
                        "value": "20.00"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " }] }\n}"
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
                "id": "quickstart.p.0131",
                "value": "Send the customer to "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0132",
                    "value": "checkout_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0133",
                "value": ". The redirect back to you carries no trustworthy payment state, confirm via webhook or Get status. After payment they land on your "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0134",
                    "value": "success_redirect"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0135",
                "value": " or "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0136",
                    "value": "failure_redirect"
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
            "tag": "h2",
            "props": {
              "id": "step4"
            },
            "children": [
              {
                "type": "text",
                "id": "quickstart.step4.0137",
                "value": "4 · Pay with a test card"
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
                "id": "quickstart.p.0138",
                "value": "On the checkout page, use a sandbox test card, any expiry ≥ current month/year, any CVV. For 3DS cards the OTP is always "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.code.0139",
                    "value": "123456"
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
                                "id": "quickstart.th.0140",
                                "value": "Card number"
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
                                "id": "quickstart.th.0141",
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
                                "id": "quickstart.th.0142",
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "chip",
                                  "data-copy": "5116213113429327"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.span.0143",
                                    "value": "5116 2131 1342 9327"
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
                                "id": "quickstart.td.0144",
                                "value": "Mastercard 2DS, authentication successful"
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
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.span.0145",
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "chip",
                                  "data-copy": "4878397953290146"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.span.0146",
                                    "value": "4878 3979 5329 0146"
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
                                "id": "quickstart.td.0147",
                                "value": "Visa 3DS challenge (OTP "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.code.0148",
                                    "value": "123456"
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.span.0149",
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
                                "type": "element",
                                "tag": "span",
                                "props": {
                                  "className": "chip",
                                  "data-copy": "5198134892284199"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.span.0150",
                                    "value": "5198 1348 9228 4199"
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
                                "id": "quickstart.td.0151",
                                "value": "Mastercard, issuer decline"
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
                                "tag": "span",
                                "props": {
                                  "className": "pill red"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "quickstart.span.0152",
                                    "value": "error"
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
                "id": "quickstart.p.0153",
                "value": "Need more scenarios? See the full "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/test-cards"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.doclink.0154",
                    "value": "test cards"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0155",
                "value": ". Note: only card payments are testable in sandbox: "
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
                    "id": "quickstart.doclink.0156",
                    "value": "APMs are validated in live"
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
            "tag": "h2",
            "props": {
              "id": "step5"
            },
            "children": [
              {
                "type": "text",
                "id": "quickstart.step5.0157",
                "value": "5 · Receive the webhook"
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
                "id": "quickstart.p.0158",
                "value": "Paysecure notifies your server the moment payment state changes, don't rely on the browser redirect alone."
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
                        "id": "quickstart.span.0159",
                        "value": "POST https://yoursite.com/webhooks/paysecure"
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
                        "id": "quickstart.button.0160",
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
                        "id": "quickstart.span.0161",
                        "value": "\"message\""
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
                        "id": "quickstart.span.0162",
                        "value": "\"purchaseId\""
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
                        "id": "quickstart.span.0163",
                        "value": "\"6a1d26a3d373e5fd3c44ae14\""
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
                        "id": "quickstart.span.0164",
                        "value": "\"status\""
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
                        "id": "quickstart.span.0165",
                        "value": "\"paid\""
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
                        "id": "quickstart.span.0166",
                        "value": "\"brandId\""
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
                        "id": "quickstart.span.0167",
                        "value": "\"brd_9f2c81a5\""
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
                        "id": "quickstart.span.0168",
                        "value": "\"purchase\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": { "
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
                        "id": "quickstart.span.0169",
                        "value": "\"currency\""
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
                        "id": "quickstart.span.0170",
                        "value": "\"EUR\""
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
                      "className": "tok-p"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.span.0171",
                        "value": "\"products\""
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ": [{ "
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
                        "id": "quickstart.span.0172",
                        "value": "\"price\""
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
                        "id": "quickstart.span.0173",
                        "value": "20.00"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": " }] }\n  }\n}"
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
              "className": "checklist"
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
                    "id": "quickstart.li.0174",
                    "value": "Configure your endpoint URL in the dashboard's "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/dashboard-configuration#webhooks"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.doclink.0175",
                        "value": "Web Hooks tab"
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
                    "type": "text",
                    "id": "quickstart.li.0176",
                    "value": "Handle the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.code.0177",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.li.0178",
                    "value": " status event, full catalogue in the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/webhooks#events"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.doclink.0179",
                        "value": "webhooks reference"
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
                    "type": "text",
                    "id": "quickstart.li.0180",
                    "value": "Verify the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.code.0181",
                        "value": "paysecure-sign"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "quickstart.li.0182",
                    "value": " header (RSA) before trusting any payload: "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/webhooks#signing"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.doclink.0183",
                        "value": "how to verify"
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
              "id": "step6"
            },
            "children": [
              {
                "type": "text",
                "id": "quickstart.step6.0184",
                "value": "6 · Verify and go further"
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
                "id": "quickstart.p.0185",
                "value": "Check the transaction under "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "quickstart.b.0186",
                    "value": "Dashboard → Payments"
                  }
                ]
              },
              {
                "type": "text",
                "id": "quickstart.p.0187",
                "value": ". You've completed the core loop, from here:"
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
                  "href": "/cards"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.h4.0188",
                        "value": "Cards →"
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
                        "id": "quickstart.p.0189",
                        "value": "Direct API card flows, authentication, capture and refunds."
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
                  "href": "/payment-methods"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.h4.0190",
                        "value": "Add payment methods →"
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
                        "id": "quickstart.p.0191",
                        "value": "Wallets, Interac, and crypto alongside cards."
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
                  "href": "/dashboard-configuration"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "quickstart.h4.0192",
                        "value": "Production setup →"
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
                        "id": "quickstart.p.0193",
                        "value": "Configure everything needed before going live."
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
                  "updated": "Last updated 05 Jul 2026 · v2.4"
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
                      "href": "/getting-started"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "quickstart.small.0194",
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
                            "id": "quickstart.b.0195",
                            "value": "← Getting started"
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
                      "href": "/sandbox-credentials"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "quickstart.small.0196",
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
                            "id": "quickstart.b.0197",
                            "value": "Sandbox & API keys →"
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
