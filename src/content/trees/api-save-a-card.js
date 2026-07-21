import { defineDocument } from '../schema.js';

export const ApiSaveACardTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "api-save-a-card",
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
            "type": "element",
            "tag": "div",
            "props": {
              "className": "api-section",
              "id": "overview",
              "style": {
                "display": "block"
              }
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "api-prose"
                },
                "children": [
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
                            "id": "api-save-a-card.doclink.0001",
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
                          "href": "/api-reference"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.doclink.0002",
                            "value": "API Reference"
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
                          "href": "/api-tokenisation"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.doclink.0003",
                            "value": "Tokenisation"
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
                        "id": "api-save-a-card.div.0004",
                        "value": "Save a Card"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h1",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h1.0005",
                        "value": "Save a Card API"
                      }
                    ]
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
                        "id": "api-save-a-card.p.0006",
                        "value": "Initialize a Paysecure-hosted card vault session and receive a reusable"
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
                            "id": "api-save-a-card.code.0007",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0008",
                        "value": " after the customer saves their card."
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
                        "id": "api-save-a-card.p.0009",
                        "value": "The customer enters their PAN and CVC directly on Paysecure's hosted page. Your backend initializes the session, your frontend follows the returned redirect URL, and your webhook handler verifies the final result. For the integration flow and operational guidance, read the"
                      },
                      {
                        "type": "text",
                        "value": " "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/save-a-card"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.doclink.0010",
                            "value": "Save a Card guide"
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
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "callout warn"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "ico",
                          "aria-hidden": "true"
                        },
                        "children": [
                          {
                            "type": "text",
                            "value": "!"
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
                            "id": "api-save-a-card.p.0011",
                            "value": "Browser redirect parameters are not proof of completion. Verify the signed webhook before storing or activating a token."
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
            "type": "element",
            "tag": "div",
            "props": {
              "className": "api-section",
              "id": "initialize"
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h2",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h2.0012",
                        "value": "Initialize a vault session"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "endpoint-sig"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "span",
                        "props": {
                          "className": "method post"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.span.0013",
                            "value": "POST"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.div.0014",
                        "value": "/vaultPaymentMethod"
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
                        "id": "api-save-a-card.p.0015",
                        "value": "Create a short-lived session for the hosted card entry page. The session expires 30 minutes after creation."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0016",
                        "value": "Headers"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0017",
                                        "value": "Header"
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
                                        "id": "api-save-a-card.th.0018",
                                        "value": "Value"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0019",
                                            "value": "Authorization"
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
                                            "id": "api-save-a-card.code.0020",
                                            "value": "Bearer YOUR_API_KEY"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0021",
                                            "value": "Content-Type"
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
                                            "id": "api-save-a-card.code.0022",
                                            "value": "application/json"
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
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0023",
                        "value": "Request fields"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0024",
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
                                        "id": "api-save-a-card.th.0025",
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
                                        "id": "api-save-a-card.th.0026",
                                        "value": "Requirement"
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
                                        "id": "api-save-a-card.th.0027",
                                        "value": "Description"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0028",
                                            "value": "customer.customer_id"
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
                                        "id": "api-save-a-card.td.0029",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0030",
                                        "value": "Conditional"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0031",
                                        "value": "Your customer identifier. Required when customer.email is not supplied."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0032",
                                            "value": "customer.email"
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
                                        "id": "api-save-a-card.td.0033",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0034",
                                        "value": "Conditional"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0035",
                                        "value": "A valid customer email. Required when customer.customer_id is not supplied."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0036",
                                            "value": "customer.full_name"
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
                                        "id": "api-save-a-card.td.0037",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0038",
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
                                        "id": "api-save-a-card.td.0039",
                                        "value": "Display name shown on the hosted card entry page."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0040",
                                            "value": "brand_id"
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
                                        "id": "api-save-a-card.td.0041",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0042",
                                        "value": "Conditional"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0043",
                                        "value": "Required when your account uses brand-specific access."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0044",
                                            "value": "success_redirect"
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
                                        "id": "api-save-a-card.td.0045",
                                        "value": "URL"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0046",
                                        "value": "Mandatory"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0047",
                                        "value": "Customer destination when the card is saved or was already saved."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0048",
                                            "value": "failure_redirect"
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
                                        "id": "api-save-a-card.td.0049",
                                        "value": "URL"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0050",
                                        "value": "Mandatory"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0051",
                                        "value": "Customer destination when the card cannot be saved."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0052",
                                            "value": "webhook_url"
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
                                        "id": "api-save-a-card.td.0053",
                                        "value": "URL"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0054",
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
                                        "id": "api-save-a-card.td.0055",
                                        "value": "Receives the asynchronous result. Strongly recommended and treated as the source of truth."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0056",
                                            "value": "locale"
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
                                        "id": "api-save-a-card.td.0057",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0058",
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
                                        "id": "api-save-a-card.td.0059",
                                        "value": "Hosted page language. Defaults to en."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0060",
                                            "value": "theme"
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
                                        "id": "api-save-a-card.td.0061",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0062",
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
                                        "id": "api-save-a-card.td.0063",
                                        "value": "Hosted page theme. Defaults to default."
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
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0064",
                        "value": "Success response"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0065",
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
                                        "id": "api-save-a-card.th.0066",
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
                                        "id": "api-save-a-card.th.0067",
                                        "value": "Description"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0068",
                                            "value": "success"
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
                                        "id": "api-save-a-card.td.0069",
                                        "value": "boolean"
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
                                            "id": "api-save-a-card.code.0070",
                                            "value": "true"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0071",
                                        "value": " when the session was initialized."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0072",
                                            "value": "data.vault_session_id"
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
                                        "id": "api-save-a-card.td.0073",
                                        "value": "string"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0074",
                                        "value": "Unique identifier for this vault session."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0075",
                                            "value": "data.redirect_url"
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
                                        "id": "api-save-a-card.td.0076",
                                        "value": "URL"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0077",
                                        "value": "Send the customer's browser to this exact URL."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0078",
                                            "value": "data.expires_at"
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
                                        "id": "api-save-a-card.td.0079",
                                        "value": "datetime"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0080",
                                        "value": "Session expiry as an ISO-8601 UTC timestamp."
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
                  }
                ]
              },
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "api-code"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "sticky"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "TryIt",
                        "props": {
                          "method": "POST",
                          "url": "/vaultPaymentMethod",
                          "config": {
                            "schemaVersion": 1,
                            "id": "save-a-card.initialize-vault-session",
                            "method": "POST",
                            "url": "/vaultPaymentMethod",
                            "fields": [
                              {
                                "k": "customer.customer_id",
                                "v": "cust_10482",
                                "req": false
                              },
                              {
                                "k": "customer.email",
                                "v": "jane@example.com",
                                "req": false
                              },
                              {
                                "k": "customer.full_name",
                                "v": "Jane Doe",
                                "req": false
                              },
                              {
                                "k": "brand_id",
                                "v": "{{BrandId}}",
                                "req": false
                              },
                              {
                                "k": "success_redirect",
                                "v": "https://merchant.example/wallet/success",
                                "req": true
                              },
                              {
                                "k": "failure_redirect",
                                "v": "https://merchant.example/wallet/failure",
                                "req": true
                              },
                              {
                                "k": "webhook_url",
                                "v": "https://merchant.example/webhooks/paysecure",
                                "req": false
                              },
                              {
                                "k": "locale",
                                "v": "en",
                                "req": false
                              }
                            ],
                            "status": "200 OK",
                            "response": {
                              "success": true,
                              "data": {
                                "vault_session_id": "vs_a1b2c3d4e5f6",
                                "redirect_url": "https://api.paysecure.net/vault/vs_a1b2c3d4e5f6",
                                "expires_at": "2026-07-16T12:30:00Z"
                              }
                            },
                            "errorStatus": "401 Unauthorized",
                            "errorResponse": {
                              "success": false,
                              "error": {
                                "code": "INVALID_API_KEY",
                                "message": "Invalid or expired API key"
                              }
                            }
                          }
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "api-section",
              "id": "redirects",
              "style": {
                "display": "block"
              }
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h2",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h2.0081",
                        "value": "Handle the redirect"
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
                        "id": "api-save-a-card.p.0082",
                        "value": "Paysecure appends result fields to the configured redirect URL. Use them only to choose what the customer sees while your backend waits for the webhook."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0083",
                        "value": "Card saved"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "code"
                    },
                    "children": [
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
                                "id": "api-save-a-card.span.0084",
                                "value": "success redirect"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "pre",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.pre.0085",
                            "value": "https://merchant.example/wallet/success\n  ?vault_session_id=vs_abc\n  &status=success\n  &token_reference=tr_xyz\n  &last_4=1111\n  &brand=visa\n  &exp_month=12\n  &exp_year=25\n  &token_type=network_token"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0086",
                        "value": "Card already saved"
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
                        "id": "api-save-a-card.p.0087",
                        "value": "The "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0088",
                            "value": "status"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0089",
                        "value": " is "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0090",
                            "value": "already_saved"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0091",
                        "value": ", and the existing token is returned with the same masked-card fields as a new save."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "code"
                    },
                    "children": [
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
                                "id": "api-save-a-card.span.0092",
                                "value": "already-saved redirect"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "pre",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.pre.0093",
                            "value": "https://merchant.example/wallet/success\n  ?vault_session_id=vs_abc\n  &status=already_saved\n  &token_reference=tr_existing\n  &last_4=1111\n  &brand=visa\n  &exp_month=12\n  &exp_year=25\n  &token_type=network_token"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0094",
                        "value": "Failure"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "code"
                    },
                    "children": [
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
                                "id": "api-save-a-card.span.0095",
                                "value": "failure redirect"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "pre",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.pre.0096",
                            "value": "https://merchant.example/wallet/failure\n  ?vault_session_id=vs_abc\n  &status=failed\n  &error_code=TOKENIZATION_FAILED\n  &error_message=Unable+to+save+card"
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
            "type": "element",
            "tag": "div",
            "props": {
              "className": "api-section",
              "id": "webhook",
              "style": {
                "display": "block"
              }
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h2",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h2.0097",
                        "value": "Webhook notification"
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
                        "id": "api-save-a-card.p.0098",
                        "value": "When "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0099",
                            "value": "webhook_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0100",
                        "value": " is supplied, Paysecure sends a"
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
                            "id": "api-save-a-card.code.0101",
                            "value": "payment_method.vaulted"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0102",
                        "value": " event after the session completes."
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0103",
                        "value": "Headers"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0104",
                                        "value": "Header"
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
                                        "id": "api-save-a-card.th.0105",
                                        "value": "Value"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0106",
                                            "value": "Content-Type"
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
                                            "id": "api-save-a-card.code.0107",
                                            "value": "application/json"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0108",
                                            "value": "User-Agent"
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
                                            "id": "api-save-a-card.code.0109",
                                            "value": "PaySecure-Webhook"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0110",
                                            "value": "X-PGS-Event"
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
                                            "id": "api-save-a-card.code.0111",
                                            "value": "payment_method.vaulted"
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
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0112",
                                            "value": "X-PGS-Signature"
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
                                        "id": "api-save-a-card.td.0113",
                                        "value": "Base64-encoded RSA/SHA-256 signature."
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
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0114",
                        "value": "Payload"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "code"
                    },
                    "children": [
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
                                "id": "api-save-a-card.span.0115",
                                "value": "payment_method.vaulted"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "pre",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.pre.0116",
                            "value": "{\n  \"event\": \"payment_method.vaulted\",\n  \"vault_session_id\": \"vs_a1b2c3d4e5f6\",\n  \"merchant_id\": \"mer_123\",\n  \"customer_id\": \"cust_10482\",\n  \"status\": \"SAVED\",\n  \"token_reference\": \"tr_new_abc123\",\n  \"last_4\": \"1111\",\n  \"brand\": \"visa\",\n  \"exp_month\": \"12\",\n  \"exp_year\": \"25\",\n  \"token_type\": \"network_token\",\n  \"timestamp\": \"2026-07-16T12:04:11Z\"\n}"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0117",
                        "value": "Payload fields"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0118",
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
                                        "id": "api-save-a-card.th.0119",
                                        "value": "Description"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0120",
                                            "value": "status"
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
                                            "id": "api-save-a-card.code.0121",
                                            "value": "SAVED"
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
                                            "id": "api-save-a-card.code.0122",
                                            "value": "ALREADY_SAVED"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0123",
                                        "value": ", or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0124",
                                            "value": "FAILED"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0125",
                                            "value": "token_reference"
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
                                        "id": "api-save-a-card.td.0126",
                                        "value": "Reusable token to store against the customer record."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0127",
                                            "value": "token_type"
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
                                            "id": "api-save-a-card.code.0128",
                                            "value": "network_token"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0129",
                                        "value": " or "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0130",
                                            "value": "pgs_token"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0131",
                                        "value": ". Both are charged identically."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0132",
                                            "value": "last_4"
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
                                            "id": "api-save-a-card.code.0133",
                                            "value": "brand"
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
                                            "id": "api-save-a-card.code.0134",
                                            "value": "exp_month"
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
                                            "id": "api-save-a-card.code.0135",
                                            "value": "exp_year"
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
                                        "id": "api-save-a-card.td.0136",
                                        "value": "Masked metadata for display purposes."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0137",
                                            "value": "timestamp"
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
                                        "id": "api-save-a-card.td.0138",
                                        "value": "ISO-8601 time at which the result was generated."
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
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0139",
                        "value": "Verify the signature"
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
                        "id": "api-save-a-card.p.0140",
                        "value": "Reconstruct "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0141",
                            "value": "{vault_session_id}|{status}|{merchant_id}"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0142",
                        "value": ", verify the Base64-decoded "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0143",
                            "value": "X-PGS-Signature"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0144",
                        "value": " with your Paysecure RSA public key, and use "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0145",
                            "value": "SHA256withRSA"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0146",
                        "value": ". Reject the webhook if verification fails. See the"
                      },
                      {
                        "type": "text",
                        "value": " "
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
                            "id": "api-save-a-card.doclink.0147",
                            "value": "full verification guide"
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
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "code"
                    },
                    "children": [
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
                                "id": "api-save-a-card.span.0148",
                                "value": "signature data"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "pre",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.pre.0149",
                            "value": "vs_abc123|SAVED|12345"
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
            "type": "element",
            "tag": "div",
            "props": {
              "className": "api-section",
              "id": "statuses",
              "style": {
                "display": "block"
              }
            },
            "children": [
              {
                "type": "element",
                "tag": "div",
                "props": {
                  "className": "api-prose"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h2",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h2.0150",
                        "value": "Statuses and errors"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0151",
                        "value": "Result statuses"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0152",
                                        "value": "Status"
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
                                        "id": "api-save-a-card.th.0153",
                                        "value": "Meaning"
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
                                        "id": "api-save-a-card.th.0154",
                                        "value": "Action"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0155",
                                            "value": "SAVED"
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
                                        "id": "api-save-a-card.td.0156",
                                        "value": "New card tokenised and stored."
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0157",
                                        "value": "Store "
                                      },
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0158",
                                            "value": "token_reference"
                                          }
                                        ]
                                      },
                                      {
                                        "type": "text",
                                        "value": "."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0159",
                                            "value": "ALREADY_SAVED"
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
                                        "id": "api-save-a-card.td.0160",
                                        "value": "Card already exists for this customer."
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0161",
                                        "value": "Use the returned existing token."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0162",
                                            "value": "FAILED"
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
                                        "id": "api-save-a-card.td.0163",
                                        "value": "Card could not be saved."
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0164",
                                        "value": "Show a failure message; use a new session for a retry."
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
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0165",
                        "value": "Error codes"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "div",
                    "props": {
                      "className": "tbl-wrap"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "table",
                        "props": {
                          "className": "tbl"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "thead",
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
                                        "id": "api-save-a-card.th.0166",
                                        "value": "Code"
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
                                        "id": "api-save-a-card.th.0167",
                                        "value": "HTTP"
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
                                        "id": "api-save-a-card.th.0168",
                                        "value": "Description"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
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
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "element",
                                        "tag": "code",
                                        "props": {},
                                        "children": [
                                          {
                                            "type": "text",
                                            "id": "api-save-a-card.code.0169",
                                            "value": "UNAUTHORIZED"
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
                                        "id": "api-save-a-card.td.0170",
                                        "value": "401"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0171",
                                        "value": "The Authorization header is missing or malformed."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0172",
                                            "value": "INVALID_API_KEY"
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
                                        "id": "api-save-a-card.td.0173",
                                        "value": "401"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0174",
                                        "value": "The API key was not found or has expired."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0175",
                                            "value": "TOKENIZATION_DISABLED"
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
                                        "id": "api-save-a-card.td.0176",
                                        "value": "400"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0177",
                                        "value": "Card saving is not enabled for the merchant account."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0178",
                                            "value": "BRAND_REQUIRED"
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
                                        "id": "api-save-a-card.td.0179",
                                        "value": "400"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0180",
                                        "value": "brand_id is required by the merchant configuration."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0181",
                                            "value": "SESSION_EXPIRED"
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
                                        "id": "api-save-a-card.td.0182",
                                        "value": "400"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0183",
                                        "value": "The vault session has passed its 30-minute expiry."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0184",
                                            "value": "SESSION_NOT_FOUND"
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
                                        "id": "api-save-a-card.td.0185",
                                        "value": "404"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0186",
                                        "value": "The vault_session_id is unknown."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0187",
                                            "value": "INVALID_CARD"
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
                                        "id": "api-save-a-card.td.0188",
                                        "value": "400"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0189",
                                        "value": "The submitted card details failed validation."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "element",
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
                                            "id": "api-save-a-card.code.0190",
                                            "value": "TOKENIZATION_FAILED"
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
                                        "id": "api-save-a-card.td.0191",
                                        "value": "500"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "element",
                                    "tag": "td",
                                    "props": {},
                                    "children": [
                                      {
                                        "type": "text",
                                        "id": "api-save-a-card.td.0192",
                                        "value": "The card could not be tokenised."
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
                    "type": "element",
                    "tag": "h3",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "api-save-a-card.h3.0193",
                        "value": "Charge the token"
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
                        "id": "api-save-a-card.p.0194",
                        "value": "Pass "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.code.0195",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "api-save-a-card.p.0196",
                        "value": " as the top-level token field in the card S2S request. See"
                      },
                      {
                        "type": "text",
                        "value": " "
                      },
                      {
                        "type": "element",
                        "tag": "DocLink",
                        "props": {
                          "className": "inline",
                          "href": "/api-tokenisation#s2s"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "api-save-a-card.doclink.0197",
                            "value": "S2S payment in the Network Tokenisation API"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": "."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "Helpful",
            "props": {
              "updated": "17 July 2026"
            },
            "children": []
          }
        ]
      }
    }
  ]
});
