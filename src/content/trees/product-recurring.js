import { defineDocument } from '../schema.js';

export const productRecurringTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "product-recurring",
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
                    "id": "product-recurring.doclink.0001",
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
                    "id": "product-recurring.doclink.0002",
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
                "id": "product-recurring.div.0003",
                "value": "Products"
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
                "id": "product-recurring.div.0004",
                "value": "Recurring payments"
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
                "id": "product-recurring.h1.0005",
                "value": "Recurring payments"
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
                "id": "product-recurring.p.0006",
                "value": "Charge customers automatically at fixed or flexible intervals without asking them to re-enter payment details each time."
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
                "id": "product-recurring.overview.0007",
                "value": "Overview"
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
                "id": "product-recurring.p.0008",
                "value": "Recurring payments are built around a "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-recurring.b.0009",
                    "value": "mandate"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-recurring.p.0010",
                "value": ": the customer's authorisation that links their payment method to you for future charges. Once created, the mandate is used as a secure reference for all upcoming payments; instead of processing every transaction as a one-time payment, you execute recurring debits against it."
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
                "id": "product-recurring.p.0011",
                "value": "The Paysecure Subscription module (also known as Mandates) creates a persistent link between you and the customer's payment method, allowing future charges without the customer being present. Recurring payments can run at fixed or non-fixed intervals depending on your business model."
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
                "id": "product-recurring.p.0012",
                "value": "The lifecycle has two transaction types:"
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
              "id": "registration-cit"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.registration-cit.0013",
                "value": "1. Mandate registration (CIT)"
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
                "id": "product-recurring.p.0014",
                "value": "The "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-recurring.b.0015",
                    "value": "Customer Initiated Transaction"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-recurring.p.0016",
                "value": " is the initial setup, with the customer actively present on your site or app (in-session). You submit the customer's details along with the mandate configuration: registration information, payment amount (fixed or variable) and the scheduling frequency for recurring debits."
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
                "id": "product-recurring.p.0017",
                "value": "The customer must explicitly consent to the mandate, and completes a one-time payment with the selected payment method to authenticate it (typically via 3D Secure). Once that payment succeeds, the mandate is registered and eligible for automated recurring transactions on the defined schedule."
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
                        "id": "product-recurring.b.0018",
                        "value": "Purpose:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0019",
                    "value": " capture payment details, authenticate the transaction, and collect consent for recurring billing."
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
                        "id": "product-recurring.b.0020",
                        "value": "Outcome:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0021",
                    "value": " a unique "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-recurring.code.0022",
                        "value": "mandate_id"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0023",
                    "value": " is generated; it acts as a secure token for all future charges."
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
                        "id": "product-recurring.b.0024",
                        "value": "Use case:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0025",
                    "value": " the customer signs up for a subscription and completes the first payment."
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
              "id": "recurring-mit"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.recurring-mit.0026",
                "value": "2. Recurring payments (MIT)"
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
                "id": "product-recurring.p.0027",
                "value": "The "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-recurring.b.0028",
                    "value": "Merchant Initiated Transaction"
                  }
                ]
              },
              {
                "type": "text",
                "id": "product-recurring.p.0029",
                "value": " is the execution phase. Payments are triggered automatically by your system, or by Paysecure's built-in scheduler, without the customer being present (off-session). Charges are processed with the customer's authorised payment method."
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
                        "id": "product-recurring.b.0030",
                        "value": "Purpose:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0031",
                    "value": " debit the customer according to the defined schedule or usage."
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
                        "id": "product-recurring.b.0032",
                        "value": "Mechanism:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0033",
                    "value": " you (or the Paysecure scheduler) send payment requests using the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-recurring.code.0034",
                        "value": "mandate_id"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0035",
                    "value": "; no card details are needed again, and 3D Secure is usually bypassed."
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
                        "id": "product-recurring.b.0036",
                        "value": "Use case:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0037",
                    "value": " a monthly subscription renewal payment."
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
              "id": "capabilities"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.capabilities.0038",
                "value": "Key capabilities"
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
                        "id": "product-recurring.b.0039",
                        "value": "Flexible scheduling:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0040",
                    "value": " rigid schedules (daily, weekly, monthly, yearly) or \"As Presented\" for irregular billing intervals."
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
                        "id": "product-recurring.b.0041",
                        "value": "Amount variability:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0042",
                    "value": " fixed amounts (e.g. a $10/month licence) or variable amounts (e.g. utility bills that change with usage)."
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
                        "id": "product-recurring.b.0043",
                        "value": "Prebuilt registration:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0044",
                    "value": " a complete mandate registration experience using cards as the payment method."
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
                        "id": "product-recurring.b.0045",
                        "value": "Analytics and operations:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0046",
                    "value": " a dedicated dashboard for monitoring mandate sign-ups, payment performance, renewal success rates and cancellations."
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
              "id": "scheduling"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.scheduling.0047",
                "value": "Who runs the schedule"
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
                "id": "product-recurring.p.0048",
                "value": "Subscriptions are handled in one of two ways:"
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
                                "id": "product-recurring.th.0049",
                                "value": "Merchant managed"
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
                                "id": "product-recurring.th.0050",
                                "value": "Paysecure managed"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "product-recurring.b.0051",
                                    "value": "How it works"
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
                                "id": "product-recurring.td.0052",
                                "value": "After registering the mandate, you create a subscription linked to it, track payment due dates, and trigger the Recurring Payments API on your own schedule"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-recurring.td.0053",
                                "value": "You create the subscription and submit the schedule (start date, frequency, end date); Paysecure executes the recurring charges automatically"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "product-recurring.b.0054",
                                    "value": "Control"
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
                                "id": "product-recurring.td.0055",
                                "value": "Full control over when and how charges are initiated"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-recurring.td.0056",
                                "value": "No need to trigger each payment; consistent, timely debits"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "product-recurring.b.0057",
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
                                "id": "product-recurring.td.0058",
                                "value": "Custom billing logic or internal scheduling systems"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "product-recurring.td.0059",
                                "value": "Standard subscription models with minimal operational overhead"
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
                "id": "product-recurring.prerequisites.0060",
                "value": "Prerequisites"
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
                "id": "product-recurring.p.0061",
                "value": "Before starting a mandate integration, make sure the required configuration is enabled at both levels:"
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
                        "id": "product-recurring.b.0062",
                        "value": "PSP level:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0063",
                    "value": " mandate-related features must be enabled on the respective PSP dashboard, so the PSP supports recurring and mandate-based transactions."
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
                        "id": "product-recurring.b.0064",
                        "value": "Paysecure dashboard:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "product-recurring.li.0065",
                    "value": " for white-label merchants, the mandate support toggle must be enabled within the MID settings of the PSP configuration. For merchants directly onboarded with Paysecure, this is managed by the Paysecure team; coordinate with your account manager."
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
              "id": "registration-flow"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.registration-flow.0066",
                "value": "Registration flow"
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
                      "src": "https://content.pstmn.io/aed8483b-3304-43c4-a305-291e37c9b534/aW1hZ2UucG5n",
                      "alt": "Mandate registration flow",
                      "loading": "lazy"
                    },
                    "children": []
                  }
                ]
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-recurring.figcaption.0067",
                    "value": "Figure 1 · Mandate registration (CIT) flow"
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
              "id": "recurring-flow"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.recurring-flow.0068",
                "value": "Recurring flow"
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
                "id": "product-recurring.p.0069",
                "value": "When you handle the scheduling:"
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
                      "src": "https://content.pstmn.io/0fde3212-41fe-4574-9371-3dcc9cee33ec/aW1hZ2UucG5n",
                      "alt": "Merchant-managed recurring flow",
                      "loading": "lazy"
                    },
                    "children": []
                  }
                ]
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-recurring.figcaption.0070",
                    "value": "Figure 2 · Recurring flow, merchant-managed scheduling"
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
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "product-recurring.p.0071",
                "value": "When Paysecure handles the scheduling:"
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
                      "src": "https://content.pstmn.io/384c80a7-159a-4777-ac2c-0bcbb4aa66a8/aW1hZ2UucG5n",
                      "alt": "Paysecure-managed recurring flow",
                      "loading": "lazy"
                    },
                    "children": []
                  }
                ]
              },
              {
                "type": "element",
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "product-recurring.figcaption.0072",
                    "value": "Figure 3 · Recurring flow, Paysecure-managed scheduling"
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
              "id": "apis"
            },
            "children": [
              {
                "type": "text",
                "id": "product-recurring.apis.0073",
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
                "id": "product-recurring.p.0074",
                "value": "Endpoint details, request parameters and mandate lifecycle calls (create customer, CIT session, MIT purchase, pause, revoke and list mandates) live in the API reference:"
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
                  "href": "/api-recurring"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-recurring.h4.0075",
                        "value": "Recurring & mandates API →"
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
                        "id": "product-recurring.p.0076",
                        "value": "CIT/MIT endpoints, mandate lifecycle, request builders."
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
                  "href": "/api-tokenisation"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "product-recurring.h4.0077",
                        "value": "Network tokenisation →"
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
                        "id": "product-recurring.p.0078",
                        "value": "Stored-card tokens that pair with recurring billing."
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
                      "href": "/product-tokenisation"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-recurring.small.0079",
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
                            "id": "product-recurring.b.0080",
                            "value": "← Tokenisation"
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
                      "href": "/product-preauth"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "product-recurring.small.0081",
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
                            "id": "product-recurring.b.0082",
                            "value": "Pre-authorisation →"
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
