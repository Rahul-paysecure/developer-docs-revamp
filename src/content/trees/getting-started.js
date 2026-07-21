import { defineDocument } from '../schema.js';

export const gettingStartedTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "getting-started",
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
                    "id": "getting-started.doclink.0001",
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
                    "id": "getting-started.doclink.0002",
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
                "id": "getting-started.div.0003",
                "value": "Getting started"
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
                "id": "getting-started.h1.0004",
                "value": "Getting started"
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
                "id": "getting-started.p.0005",
                "value": "Your technical briefing before touching the API, understand the architecture, choose an integration path, and know what you'll need."
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
              "id": "architecture"
            },
            "children": [
              {
                "type": "text",
                "id": "getting-started.architecture.0006",
                "value": "How Paysecure fits into your stack"
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
                "id": "getting-started.p.0007",
                "value": "Paysecure is a "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "getting-started.b.0008",
                    "value": "payment optimisation and intelligence layer"
                  }
                ]
              },
              {
                "type": "text",
                "id": "getting-started.p.0009",
                "value": ": it sits between your application and multiple payment processors, routing each transaction to the best-performing processor based on approval rates, geography, transaction type, and processor availability."
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
              "className": "diagram"
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
                  "className": "dbox"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.b.0010",
                        "value": "Your application"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.span.0011",
                        "value": "Web · Mobile · Server"
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
                "tag": "span",
                "props": {
                  "className": "darr"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "→"
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
                  "className": "dbox hl"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.b.0012",
                        "value": "Paysecure"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.span.0013",
                        "value": "Orchestration & routing"
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
                "tag": "span",
                "props": {
                  "className": "darr"
                },
                "children": [
                  {
                    "type": "text",
                    "value": "→"
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
                  "className": "dbox"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.b.0014",
                        "value": "Payment processors"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "span",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.span.0015",
                        "value": "250+ PSPs & acquirers"
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
                        "id": "getting-started.b.0016",
                        "value": "One integration, many processors."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "getting-started.p.0017",
                    "value": " You integrate Paysecure once; adding a new PSP, market, or payment method later requires no code change on your side."
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
              "id": "paths"
            },
            "children": [
              {
                "type": "text",
                "id": "getting-started.paths.0018",
                "value": "Choose an integration path"
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
                "id": "getting-started.p.0019",
                "value": "All three paths use the same "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "getting-started.code.0020",
                    "value": "POST /purchases/"
                  }
                ]
              },
              {
                "type": "text",
                "id": "getting-started.p.0021",
                "value": " API underneath; they differ in who renders the payment UI and your PCI scope."
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
                                "id": "getting-started.th.0022",
                                "value": "Hosted Cashier"
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
                                "id": "getting-started.th.0023",
                                "value": "Server-to-Server"
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
                                "id": "getting-started.th.0024",
                                "value": "Embeddable Checkout"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0025",
                                    "value": "Payment UI"
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
                                "id": "getting-started.td.0026",
                                "value": "Paysecure-hosted page"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0027",
                                "value": "Your own checkout"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0028",
                                "value": "Iframe in your page"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0029",
                                    "value": "PCI scope"
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
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.span.0030",
                                    "value": "SAQ A"
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
                                "tag": "span",
                                "props": {
                                  "className": "pill amber"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.span.0031",
                                    "value": "SAQ D / tokenised"
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
                                "tag": "span",
                                "props": {
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.span.0032",
                                    "value": "SAQ A"
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
                                    "id": "getting-started.b.0033",
                                    "value": "Card data"
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
                                "id": "getting-started.td.0034",
                                "value": "Never touches you"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0035",
                                "value": "Via the S2S call"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0036",
                                "value": "Never touches you"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0037",
                                    "value": "Effort"
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
                                "id": "getting-started.td.0038",
                                "value": "~1 day"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0039",
                                "value": "1–2 weeks"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0040",
                                "value": "2–3 days"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0041",
                                    "value": "Best for"
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
                                "id": "getting-started.td.0042",
                                "value": "Fast launch, APM-heavy"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0043",
                                "value": "Full UX control"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "getting-started.td.0044",
                                "value": "Native feel, low PCI"
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
              "id": "lifecycle"
            },
            "children": [
              {
                "type": "text",
                "id": "getting-started.lifecycle.0045",
                "value": "The integration lifecycle"
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
                    "id": "getting-started.div.0046",
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
                    "type": "text",
                    "value": "\n        "
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h3.0047",
                        "value": "Set up"
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
                        "id": "getting-started.p.0048",
                        "value": "Create your merchant account, get "
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
                            "id": "getting-started.doclink.0049",
                            "value": "sandbox API keys"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "getting-started.p.0050",
                        "value": ", and "
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
                            "id": "getting-started.doclink.0051",
                            "value": "configure your dashboard"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "getting-started.p.0052",
                        "value": ", brand, redirect URLs, webhook endpoint."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
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
                    "id": "getting-started.div.0053",
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
                    "type": "text",
                    "value": "\n        "
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h3.0054",
                        "value": "Integrate"
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
                        "id": "getting-started.p.0055",
                        "value": "Build API requests, handle checkout redirects, and implement payment flows. Start with the "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/quickstart"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "getting-started.doclink.0056",
                            "value": "Quickstart"
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
                    "id": "getting-started.div.0057",
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
                    "type": "text",
                    "value": "\n        "
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h3.0058",
                        "value": "Test"
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
                        "id": "getting-started.p.0059",
                        "value": "Run every scenario with "
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
                            "id": "getting-started.doclink.0060",
                            "value": "test cards"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "getting-started.p.0061",
                        "value": " and the "
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
                            "id": "getting-started.doclink.0062",
                            "value": "APM simulator"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "getting-started.p.0063",
                        "value": ", success, 3DS2 challenge, declines, refunds, and webhooks."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
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
                    "id": "getting-started.div.0064",
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
                    "type": "text",
                    "value": "\n        "
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h3.0065",
                        "value": "Go live"
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
                        "id": "getting-started.p.0066",
                        "value": "Complete KYB verification, swap sandbox keys for live keys, and process real transactions. Follow the go-live checklist."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n      "
                  }
                ]
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
              "id": "standards"
            },
            "children": [
              {
                "type": "text",
                "id": "getting-started.standards.0067",
                "value": "API standards"
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
                            "tag": "td",
                            "props": {
                              "style": {
                                "width": "180px"
                              }
                            },
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
                                    "id": "getting-started.b.0068",
                                    "value": "Protocol"
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
                                "id": "getting-started.td.0069",
                                "value": "All communication over HTTPS (TLS 1.2+)"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0070",
                                    "value": "Data format"
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
                                "id": "getting-started.td.0071",
                                "value": "All requests and responses are JSON"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0072",
                                    "value": "Base URL"
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
                                "props": {
                                  "className": "env-sb-only"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.code.0073",
                                    "value": "https://api.paysecure.net/api/v1/"
                                  }
                                ]
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {
                                  "className": "env-lv-only"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.code.0074",
                                    "value": "https://api.paysecure.net/api/v1/ (live keys)"
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
                                    "id": "getting-started.b.0075",
                                    "value": "Authentication"
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
                                "id": "getting-started.td.0076",
                                "value": "Bearer token, your secret API key in the "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.code.0077",
                                    "value": "Authorization"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "getting-started.td.0078",
                                "value": " header"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0079",
                                    "value": "Idempotency"
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
                                "id": "getting-started.td.0080",
                                "value": "Safe retries via a unique "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.code.0081",
                                    "value": "merchantRef"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "getting-started.td.0082",
                                "value": " per purchase, duplicates are rejected"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "getting-started.b.0083",
                                    "value": "Formats"
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
                                "id": "getting-started.td.0084",
                                "value": "Currency ISO 4217 ("
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.code.0085",
                                    "value": "AUD"
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
                                    "id": "getting-started.code.0086",
                                    "value": "BRL"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "getting-started.td.0087",
                                "value": ") · country ISO-3166-1 alpha-2 uppercase · timestamps ISO-8601 UTC · prices decimal (e.g. "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "getting-started.code.0088",
                                    "value": "10.37"
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
                                    "id": "getting-started.b.0089",
                                    "value": "Versioning"
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
                                "id": "getting-started.td.0090",
                                "value": "Versioned base path; breaking changes announced in the changelog"
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
              "id": "prerequisites"
            },
            "children": [
              {
                "type": "text",
                "id": "getting-started.prerequisites.0091",
                "value": "Technical prerequisites"
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
                "tag": "div",
                "props": {
                  "className": "card"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "rect",
                            "props": {
                              "x": "2",
                              "y": "3",
                              "width": "20",
                              "height": "14",
                              "rx": "2"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M8 21h8M12 17v4"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h4.0092",
                        "value": "Backend server"
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
                        "id": "getting-started.p.0093",
                        "value": "Able to make outbound HTTPS POST requests. Your secret key must never be used from a browser or app."
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
                  "className": "card"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "rect",
                            "props": {
                              "x": "3",
                              "y": "11",
                              "width": "18",
                              "height": "11",
                              "rx": "2"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M7 11V7a5 5 0 0 1 10 0v4"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h4.0094",
                        "value": "Secret storage"
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
                        "id": "getting-started.p.0095",
                        "value": "Somewhere safe for API keys, environment variables or a secrets manager, never source control."
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
                  "className": "card"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "18",
                              "cy": "5",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "6",
                              "cy": "12",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "circle",
                            "props": {
                              "cx": "18",
                              "cy": "19",
                              "r": "3"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h4.0096",
                        "value": "Public webhook endpoint"
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
                        "id": "getting-started.p.0097",
                        "value": "An HTTPS URL that can receive and verify signed payment event notifications."
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
                  "className": "card"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "ci"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "svg",
                        "props": {
                          "viewBox": "0 0 24 24",
                          "fill": "none",
                          "stroke": "var(--purple)",
                          "strokeWidth": "1.8",
                          "strokeLinecap": "round",
                          "strokeLinejoin": "round",
                          "width": "18",
                          "height": "18"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                            },
                            "children": []
                          },
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                            },
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.h4.0098",
                        "value": "Auth basics"
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
                        "id": "getting-started.p.0099",
                        "value": "Working knowledge of Bearer-token authentication and JSON APIs."
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
                          "d": "M22 2L11 13"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M22 2l-7 20-4-9-9-4 20-7z"
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
                        "id": "getting-started.b.0100",
                        "value": "Ready to start?"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "getting-started.p.0101",
                    "value": " Grab your "
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
                        "id": "getting-started.doclink.0102",
                        "value": "sandbox credentials"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "getting-started.p.0103",
                    "value": ", then follow the "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/quickstart"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "getting-started.doclink.0104",
                        "value": "Quickstart"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "getting-started.p.0105",
                    "value": " to your first successful test payment."
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
                      "href": "/"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "getting-started.small.0106",
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
                            "id": "getting-started.b.0107",
                            "value": "← Homepage"
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
                      "href": "/quickstart"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "getting-started.small.0108",
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
                            "id": "getting-started.b.0109",
                            "value": "Quickstart →"
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
