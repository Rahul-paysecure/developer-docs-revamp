import { defineDocument } from '../schema.js';

export const SaveACardTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "save-a-card",
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
                    "id": "save-a-card.doclink.0001",
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
                    "id": "save-a-card.doclink.0002",
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
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "href": "/product-tokenisation"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.doclink.0003",
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
                "id": "save-a-card.div.0004",
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
                "id": "save-a-card.h1.0005",
                "value": "Save a Card"
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
                "id": "save-a-card.p.0006",
                "value": "Let customers save a card for future payments through a Paysecure-hosted card entry page. Your systems receive a reusable "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.code.0007",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "save-a-card.p.0008",
                "value": " and masked card metadata, without receiving the PAN or CVC."
              }
            ]
          },
          {
            "type": "element",
            "tag": "div",
            "props": {
              "className": "callout info"
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
                    "id": "save-a-card.span.0009",
                    "value": "ℹ"
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
                    "id": "save-a-card.p.0010",
                    "value": "This flow uses the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "save-a-card.code.0011",
                        "value": "vaultPaymentMethod"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "save-a-card.p.0012",
                    "value": " API to save a card without taking a payment. To save a card during a purchase, see the"
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
                      "href": "/product-tokenisation#provisioning"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "save-a-card.doclink.0013",
                        "value": "tokenisation guide"
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
            "tag": "h2",
            "props": {
              "id": "when-to-use"
            },
            "children": [
              {
                "type": "text",
                "id": "save-a-card.when-to-use.0014",
                "value": "When to use this flow"
              }
            ]
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {
              "className": "checklist"
            },
            "children": [
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.li.0015",
                    "value": "Let returning customers pay without entering their card details again."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.li.0016",
                    "value": "Offer one-click deposits using a previously saved card."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.li.0017",
                    "value": "Save a card before the first charge: save now, charge later."
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.li.0018",
                    "value": "Keep card entry on Paysecure-hosted pages rather than your own servers."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "behaviour"
            },
            "children": [
              {
                "type": "text",
                "id": "save-a-card.behaviour.0019",
                "value": "Key behaviour"
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
                                "id": "save-a-card.th.0020",
                                "value": "Behaviour"
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
                                "id": "save-a-card.th.0021",
                                "value": "What it means for your integration"
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
                                "tag": "b",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.b.0022",
                                    "value": "Idempotent by card"
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
                                "id": "save-a-card.td.0023",
                                "value": "Saving a card already held for the customer returns its existing "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.code.0024",
                                    "value": "token_reference"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "save-a-card.td.0025",
                                "value": "; it does not create a duplicate."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.b.0026",
                                    "value": "Tokenisation fallback"
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
                                "id": "save-a-card.td.0027",
                                "value": "Paysecure can apply an internal fallback if external network tokenisation is unavailable. The returned reference is used the same way."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.b.0028",
                                    "value": "Two completion signals"
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
                                "id": "save-a-card.td.0029",
                                "value": "The browser redirect drives the customer experience; the signed webhook is the source of truth for your records."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.b.0030",
                                    "value": "30-minute session"
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
                                "id": "save-a-card.td.0031",
                                "value": "An expired vault session cannot be reused. Initialize a new session and redirect the customer again."
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
            "tag": "h2",
            "props": {
              "id": "flow"
            },
            "children": [
              {
                "type": "text",
                "id": "save-a-card.flow.0032",
                "value": "How it works"
              }
            ]
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
                    "id": "save-a-card.div.0033",
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
                        "id": "save-a-card.h3.0034",
                        "value": "Initialize a vault session"
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
                        "id": "save-a-card.p.0035",
                        "value": "Your server calls "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0036",
                            "value": "POST /api/v1/vaultPaymentMethod"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "save-a-card.p.0037",
                        "value": " with a customer identifier and redirect URLs. Paysecure returns "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0038",
                            "value": "vault_session_id"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": ","
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
                            "id": "save-a-card.code.0039",
                            "value": "redirect_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "save-a-card.p.0040",
                        "value": ", and "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0041",
                            "value": "expires_at"
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
                    "id": "save-a-card.div.0042",
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
                        "id": "save-a-card.h3.0043",
                        "value": "Redirect the customer"
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
                        "id": "save-a-card.p.0044",
                        "value": "Send the customer's browser to the exact "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0045",
                            "value": "redirect_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "save-a-card.p.0046",
                        "value": " returned by Paysecure. Do not construct or modify this URL."
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
                    "id": "save-a-card.div.0047",
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
                        "id": "save-a-card.h3.0048",
                        "value": "Customer enters the card"
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
                        "id": "save-a-card.p.0049",
                        "value": "The card is submitted directly to Paysecure. A new card is tokenised; a card already saved for this customer resolves to its existing token."
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
                    "id": "save-a-card.div.0050",
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
                        "id": "save-a-card.h3.0051",
                        "value": "Handle the browser redirect"
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
                        "id": "save-a-card.p.0052",
                        "value": "Show the appropriate UI after the customer lands on your "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0053",
                            "value": "success_redirect"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": " "
                      },
                      {
                        "type": "text",
                        "id": "save-a-card.p.0054",
                        "value": "or "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0055",
                            "value": "failure_redirect"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "save-a-card.p.0056",
                        "value": ". Treat all query parameters as untrusted input."
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
                    "id": "save-a-card.div.0057",
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
                        "id": "save-a-card.h3.0058",
                        "value": "Verify the webhook"
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
                        "id": "save-a-card.p.0059",
                        "value": "Verify the RSA/SHA-256 signature, then store the "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "save-a-card.code.0060",
                            "value": "token_reference"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "save-a-card.p.0061",
                        "value": " and masked card metadata against your customer record."
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
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "save-a-card.b.0062",
                        "value": "Do not fulfil from the redirect."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "save-a-card.p.0063",
                    "value": " Query parameters can be modified by the end user, and the customer may close the tab before returning. Update your records only after receiving and verifying the webhook."
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "statuses"
            },
            "children": [
              {
                "type": "text",
                "id": "save-a-card.statuses.0064",
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
                                "id": "save-a-card.th.0065",
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
                                "id": "save-a-card.th.0066",
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
                                "id": "save-a-card.th.0067",
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
                                    "id": "save-a-card.code.0068",
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
                                "id": "save-a-card.td.0069",
                                "value": "A new card was tokenised and stored."
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "save-a-card.td.0070",
                                "value": "Store the returned "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.code.0071",
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
                                    "id": "save-a-card.code.0072",
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
                                "id": "save-a-card.td.0073",
                                "value": "The card was already on file for this customer."
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "save-a-card.td.0074",
                                "value": "Use the existing "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "save-a-card.code.0075",
                                    "value": "token_reference"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "save-a-card.td.0076",
                                "value": " returned in the payload."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "save-a-card.code.0077",
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
                                "id": "save-a-card.td.0078",
                                "value": "The card could not be saved."
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "save-a-card.td.0079",
                                "value": "Show a failure state and initialize a new session if the customer retries."
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
            "tag": "h2",
            "props": {
              "id": "charge"
            },
            "children": [
              {
                "type": "text",
                "id": "save-a-card.charge.0080",
                "value": "Charge the saved card"
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
                "id": "save-a-card.p.0081",
                "value": "Pass the returned "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.code.0082",
                    "value": "token_reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "save-a-card.p.0083",
                "value": " in the existing card S2S payment request. Both "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.code.0084",
                    "value": "network_token"
                  }
                ]
              },
              {
                "type": "text",
                "id": "save-a-card.p.0085",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.code.0086",
                    "value": "pgs_token"
                  }
                ]
              },
              {
                "type": "text",
                "id": "save-a-card.p.0087",
                "value": " references are charged in the same way; you do not need to branch on "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "save-a-card.code.0088",
                    "value": "token_type"
                  }
                ]
              },
              {
                "type": "text",
                "id": "save-a-card.p.0089",
                "value": ". See"
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
                    "id": "save-a-card.doclink.0090",
                    "value": "S2S payment with a saved token"
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
            "tag": "h2",
            "props": {
              "id": "next"
            },
            "children": [
              {
                "type": "text",
                "id": "save-a-card.next.0091",
                "value": "Next steps"
              }
            ]
          },
          {
            "type": "element",
            "tag": "ul",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-save-a-card"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "save-a-card.doclink.0092",
                        "value": "Save a Card API reference"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
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
                        "id": "save-a-card.doclink.0093",
                        "value": "Webhook signature verification"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "li",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-tokenisation"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "save-a-card.doclink.0094",
                        "value": "Network Tokenisation API"
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
