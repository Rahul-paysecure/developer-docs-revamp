import { defineDocument } from '../schema.js';

export const dashReportsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "dash-reports",
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
                    "id": "dash-reports.doclink.0001",
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
                  "href": "/dashboard"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.doclink.0002",
                    "value": "Dashboard"
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
                "id": "dash-reports.div.0003",
                "value": "Reports and Analytics"
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
                "id": "dash-reports.h1.0004",
                "value": "Reports and Analytics"
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
                "id": "dash-reports.p.0005",
                "value": "Real-time reporting and analytics, transaction reports, logs, success rates, merchant performance, geo distribution, and forecasting."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n\n"
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "introduction"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.introduction.0006",
                "value": "Introduction"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0007",
                "value": "Paysecure offers a Reporting & Analytics suite that gives merchants real-time visibility of business performance. Designed for business, operations, and finance teams, it provides in-depth reporting on transactions, system activity, customer behaviour, and payment success trends."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                "value": "\n  "
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
                        "id": "dash-reports.b.0008",
                        "value": "Reporting Module"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dash-reports.li.0009",
                    "value": ": monitor transactions, view API and error logs, and generate downloadable reports for reconciliation and audits."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n  "
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
                        "id": "dash-reports.b.0010",
                        "value": "Analytics Module"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dash-reports.li.0011",
                    "value": ": visual dashboards and metrics covering success rates, customer behaviour, merchant performance, and risk trends."
                  }
                ]
              },
              {
                "type": "text",
                "value": "\n"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "reports"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.reports.0012",
                "value": "Reports"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "transactions-report"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.transactions-report.0013",
                "value": "Transactions Report"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0014",
                "value": "A full list of transactions with advanced filtering: filter by "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0015",
                    "value": "Date/Time Range, Bank Name, Merchant Name, Transaction Status,"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0016",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0017",
                    "value": "Currency"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0018",
                "value": "; search by "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0019",
                    "value": "Purchase ID"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0020",
                "value": " or "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0021",
                    "value": "Merchant Reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0022",
                "value": "; export or review data for tracking, analysis, or support."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-04_at_5.13.40_PM-325ddeba5bb5cfd92b9300bbcfa10d61.png",
                      "alt": "Transactions report",
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
                    "id": "dash-reports.figcaption.0023",
                    "value": "Figure 1 · Transactions report"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "download-reports"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.download-reports.0024",
                "value": "Download Reports"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0025",
                "value": "Generate and export customised reports filtered by "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0026",
                    "value": "Date and Time, Bank, MID, Payment Status,"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0027",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0028",
                    "value": "Payment ID"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0029",
                "value": ": useful for transaction tracking, daily or periodic reconciliation, and internal audits and compliance."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "error-logs"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.error-logs.0030",
                "value": "Error Logs"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0031",
                "value": "Monitor and review transaction errors across merchants. Filter by "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0032",
                    "value": "Time Range, Merchant Name, Purchase ID,"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0033",
                "value": " or "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0034",
                    "value": "Merchant Reference"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0035",
                "value": ": useful for identifying patterns and improving routing or cascading rules."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-04_at_5.47.35_PM-581b78c0a541023ed02202a79e6216de.png",
                      "alt": "Error logs",
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
                    "id": "dash-reports.figcaption.0036",
                    "value": "Figure 2 · Error logs"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "audit-logs"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.audit-logs.0037",
                "value": "Audit Logs"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0038",
                "value": "Track system-level activity for transparency and security. Filter by "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0039",
                    "value": "Username, Action Type,"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0040",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0041",
                    "value": "User Role"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0042",
                "value": ": a record of administrative actions and system changes."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-04_at_5.48.06_PM-f09a988766b34ffe92940f8583b1dee0.png",
                      "alt": "Audit logs",
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
                    "id": "dash-reports.figcaption.0043",
                    "value": "Figure 3 · Audit logs"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h2",
            "props": {
              "id": "analytics"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.analytics.0044",
                "value": "Analytics"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0045",
                "value": "Modules: Analytics Reporting · Comparison Graph · Success Rate Analysis · Error Summary · Merchant Transaction Summary · Customer Summary · Merchant Analytics · Merchant GeoChart* · Sensitivity Report* · Approval Band Report* · Best Approval Conditions* · Merchant Quality Index* · Trends & Forecasting "
              },
              {
                "type": "element",
                "tag": "em",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.em.0046",
                    "value": "(*white-label merchants and Admin only)"
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
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "analytics-reporting"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.analytics-reporting.0047",
                "value": "Analytics Reporting"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0048",
                "value": "An advanced reporting module for generating detailed reports with filters for "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0049",
                    "value": "Currency, Amount Range, Transaction Status,"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0050",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.b.0051",
                    "value": "Date Range"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0052",
                "value": ", grouped by any of the following parameters:"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                                "id": "dash-reports.th.0053",
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
                                "id": "dash-reports.th.0054",
                                "value": "Description"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0055",
                                    "value": "accept_header"
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
                                "id": "dash-reports.td.0056",
                                "value": "Headers in API calls; can be filtered by bank and/or currency."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0057",
                                    "value": "Accept_language"
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
                                "id": "dash-reports.td.0058",
                                "value": "Language preference of the user's browser or device."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0059",
                                    "value": "Amount_in_USD"
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
                                "id": "dash-reports.td.0060",
                                "value": "Transaction amount converted into USD."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0061",
                                    "value": "Bankname"
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
                                "id": "dash-reports.td.0062",
                                "value": "Name of the bank handling the transaction."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0063",
                                    "value": "Bankmid"
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
                                "id": "dash-reports.td.0064",
                                "value": "Merchant Identification Number (MID) assigned by the bank."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0065",
                                    "value": "BinCCode"
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
                                "id": "dash-reports.td.0066",
                                "value": "Country code associated with the BIN."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0067",
                                    "value": "BinNumber"
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
                                "id": "dash-reports.td.0068",
                                "value": "First 6–8 digits of the card number, identifying the issuing bank."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0069",
                                    "value": "BrandName"
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
                                "id": "dash-reports.td.0070",
                                "value": "Brand name of the merchant or service provider."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0071",
                                    "value": "Browser"
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
                                "id": "dash-reports.td.0072",
                                "value": "Browser type used for the transaction (e.g. Chrome, Firefox)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0073",
                                    "value": "BrowserVersion"
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
                                "id": "dash-reports.td.0074",
                                "value": "Version of the browser being used."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0075",
                                    "value": "CardBrand"
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
                                "id": "dash-reports.td.0076",
                                "value": "The card network (e.g. Visa, Mastercard, AMEX)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0077",
                                    "value": "Cascade_Num"
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
                                "id": "dash-reports.td.0078",
                                "value": "Routing sequence number in case of multiple transaction attempts."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0079",
                                    "value": "CheckOutTemplate"
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
                                "id": "dash-reports.td.0080",
                                "value": "Template used for rendering the checkout page."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0081",
                                    "value": "ColourDepth"
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
                                "id": "dash-reports.td.0082",
                                "value": "Number of bits used to represent colour on the user's screen."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0083",
                                    "value": "Country"
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
                                "id": "dash-reports.td.0084",
                                "value": "Country where the transaction originates."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0085",
                                    "value": "Currency"
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
                                "id": "dash-reports.td.0086",
                                "value": "Currency in which the transaction is processed."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0087",
                                    "value": "Day"
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
                                "id": "dash-reports.td.0088",
                                "value": "Day of the month when the transaction occurred."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0089",
                                    "value": "DayInYear"
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
                                "id": "dash-reports.td.0090",
                                "value": "Transaction day as a number within the year (1–365/366)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0091",
                                    "value": "Dayname"
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
                                "id": "dash-reports.td.0092",
                                "value": "Name of the day (e.g. Monday)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0093",
                                    "value": "DebitOrcredit"
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
                                "id": "dash-reports.td.0094",
                                "value": "Whether the card used is debit or credit."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0095",
                                    "value": "Descriptor"
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
                                "id": "dash-reports.td.0096",
                                "value": "Transaction description appearing on the customer's statement."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0097",
                                    "value": "ErrorMsg"
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
                                "id": "dash-reports.td.0098",
                                "value": "Error message returned for failed transactions."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0099",
                                    "value": "FraudScore"
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
                                "id": "dash-reports.td.0100",
                                "value": "Risk assessment score for detecting fraudulent transactions."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0101",
                                    "value": "Hour"
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
                                "id": "dash-reports.td.0102",
                                "value": "Hour (24-hour format) when the transaction took place."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0103",
                                    "value": "IpAddress"
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
                                "id": "dash-reports.td.0104",
                                "value": "IP address of the user making the transaction."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0105",
                                    "value": "IsIframe"
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
                                "id": "dash-reports.td.0106",
                                "value": "Whether the transaction happens within an embedded iframe."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0107",
                                    "value": "IsJavaEnabled"
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
                                "id": "dash-reports.td.0108",
                                "value": "Whether Java is enabled on the user's browser."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0109",
                                    "value": "IsJavaScriptEnabled"
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
                                "id": "dash-reports.td.0110",
                                "value": "Whether JavaScript is enabled on the user's browser."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0111",
                                    "value": "IsS2s"
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
                                "id": "dash-reports.td.0112",
                                "value": "Whether the transaction is processed Server-to-Server (S2S)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0113",
                                    "value": "LastAction"
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
                                "id": "dash-reports.td.0114",
                                "value": "Last recorded action in the transaction process."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0115",
                                    "value": "MaskedNumber"
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
                                "id": "dash-reports.td.0116",
                                "value": "Masked version of the card number (e.g. 5200******0015)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0117",
                                    "value": "MerchantName"
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
                                "id": "dash-reports.td.0118",
                                "value": "Name of the merchant processing the payment."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0119",
                                    "value": "Month"
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
                                "id": "dash-reports.td.0120",
                                "value": "Month when the transaction occurred."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0121",
                                    "value": "Os"
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
                                "id": "dash-reports.td.0122",
                                "value": "Operating system used (e.g. Windows, macOS, Android)."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0123",
                                    "value": "Otp"
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
                                "id": "dash-reports.td.0124",
                                "value": "One-Time Password used for authentication."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0125",
                                    "value": "PaysecureDeviceId"
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
                                "id": "dash-reports.td.0126",
                                "value": "Unique device identifier for transactions."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0127",
                                    "value": "PixelDepth"
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
                                "id": "dash-reports.td.0128",
                                "value": "Pixel depth of the user's screen."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0129",
                                    "value": "ProfileId"
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
                                "id": "dash-reports.td.0130",
                                "value": "Unique identifier for the user profile."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0131",
                                    "value": "Referer"
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
                                "id": "dash-reports.td.0132",
                                "value": "URL of the referring website."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0133",
                                    "value": "RequestIpCCode"
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
                                "id": "dash-reports.td.0134",
                                "value": "Country code of the requesting IP address."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0135",
                                    "value": "RuleCategoryName"
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
                                "id": "dash-reports.td.0136",
                                "value": "Category under which a transaction rule is applied."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0137",
                                    "value": "RuleName"
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
                                "id": "dash-reports.td.0138",
                                "value": "Name of the applied rule."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0139",
                                    "value": "RuleTagName"
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
                                "id": "dash-reports.td.0140",
                                "value": "Tags associated with the applied rule."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0141",
                                    "value": "ScreenHeight"
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
                                "id": "dash-reports.td.0142",
                                "value": "Height of the user's screen in pixels."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0143",
                                    "value": "ScreenWidht"
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
                                "id": "dash-reports.td.0144",
                                "value": "Width of the user's screen in pixels."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0145",
                                    "value": "TrustScore"
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
                                "id": "dash-reports.td.0146",
                                "value": "Trustworthiness score based on risk analysis."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0147",
                                    "value": "TwoDPayment"
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
                                "id": "dash-reports.td.0148",
                                "value": "Whether the transaction is a 2D payment."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0149",
                                    "value": "UserCookie"
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
                                "id": "dash-reports.td.0150",
                                "value": "Cookie data related to the user's session."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0151",
                                    "value": "UserDetail"
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
                                "id": "dash-reports.td.0152",
                                "value": "Additional details about the user."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0153",
                                    "value": "UserDeviceId"
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
                                "id": "dash-reports.td.0154",
                                "value": "Unique device identifier assigned to the user."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0155",
                                    "value": "Utc_offset"
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
                                "id": "dash-reports.td.0156",
                                "value": "UTC time zone offset of the user."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0157",
                                    "value": "WeekInMonth"
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
                                "id": "dash-reports.td.0158",
                                "value": "Week number within the month."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0159",
                                    "value": "WeekInYear"
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
                                "id": "dash-reports.td.0160",
                                "value": "Week number within the year."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dash-reports.code.0161",
                                    "value": "Year"
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
                                "id": "dash-reports.td.0162",
                                "value": "Year when the transaction occurred."
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
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "comparison-graph"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.comparison-graph.0163",
                "value": "Comparison Graph"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0164",
                "value": "An interactive graph to visually compare transaction trends across dimensions."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0165",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0166",
                "value": " identify seasonal peaks and dips; compare volume trends across months or years; track performance by currency or payment status."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0167",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0168",
                "value": " transaction metric (count or amount); time range (yearly, monthly, weekly); payment status, merchant, currency."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-06-06_at_4.47.45_PM-321edb9990630fd37bf98b29000e8884.png",
                      "alt": "Comparison graph",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-06-06_at_4.48.33_PM-4370ed8baf4831129c82186a3a7ebbba.png",
                      "alt": "Comparison graph",
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
                    "id": "dash-reports.figcaption.0169",
                    "value": "Figure 4 · Comparison graph"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "success-rate"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.success-rate.0170",
                "value": "Success Rate Analysis"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0171",
                "value": "A summary of transaction outcomes (Approved, Rejected, Pending) within a defined timeframe."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0172",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0173",
                "value": " evaluate approval rate trends; identify drop-offs in specific currencies or merchant flows; optimise processing."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0174",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0175",
                "value": " metric (transaction count or amount); merchant; currency."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_4.49.16_PM-f1c3c5f8006e3b88423d3d176edd6bbb.png",
                      "alt": "Success rate analysis",
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
                    "id": "dash-reports.figcaption.0176",
                    "value": "Figure 5 · Success rate analysis"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "error-summary"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.error-summary.0177",
                "value": "Error Summary"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0178",
                "value": "The most frequent error codes encountered, grouped by volume and occurrence."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0179",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0180",
                "value": " diagnose technical failures or bank declines; target problematic error codes in routing/cascading; collaborate with PSPs to reduce declines."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0181",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0182",
                "value": " date range; merchant; bank."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_4.49.51_PM-cfae2b9585e4e8ed7a5a22761fca13c1.png",
                      "alt": "Error summary",
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
                    "id": "dash-reports.figcaption.0183",
                    "value": "Figure 6 · Error summary"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "txn-summary"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.txn-summary.0184",
                "value": "Merchant Transaction Summary"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0185",
                "value": "How transactions are distributed across status codes such as Paid, Failed, Cancelled."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0186",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0187",
                "value": " understand the transaction lifecycle breakdown; detect unusual failure spikes; measure retry and reversal rates."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0188",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0189",
                "value": " merchant; bank; currency; date/time range."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_4.51.22_PM-1bfa5ac4bceeaef94749506e6984748e.png",
                      "alt": "Merchant transaction summary",
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
                    "id": "dash-reports.figcaption.0190",
                    "value": "Figure 7 · Merchant transaction summary"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "customer-summary"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.customer-summary.0191",
                "value": "Customer Summary"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0192",
                "value": "Transactions at customer level, with visibility into behaviour, device usage, and geographic activity. Grouping: customer email, customer type, device type."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0193",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0194",
                "value": " identify loyal or high-value customers; track suspicious customers/devices by failure rates; segment users for campaigns or risk filters."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0195",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0196",
                "value": " transaction status; country; merchant."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_4.54.05_PM-ec4d1e4ce995b32350cceab478fcccb0.png",
                      "alt": "Customer summary",
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
                    "id": "dash-reports.figcaption.0197",
                    "value": "Figure 8 · Customer summary"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "merchant-analytics"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.merchant-analytics.0198",
                "value": "Merchant Analytics"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0199",
                "value": "A complete overview of merchant performance, volume, value, and approval metrics in one place. Metrics: total paid transactions, total approved value, approval rate, status-wise breakdown by count and amount."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0200",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0201",
                "value": " benchmark merchants on approval rates and volume; evaluate revenue contribution and risk exposure; compare merchants under the same white-label account."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0202",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0203",
                "value": " time range (current year or month); merchant; currency."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.16.16_PM-b460a891b5ae1ee362c4d188b19a3be6.png",
                      "alt": "Merchant analytics",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.15.59_PM-dabe2a2e50d40f8688c1f6018fdfe8e9.png",
                      "alt": "Merchant analytics",
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
                    "id": "dash-reports.figcaption.0204",
                    "value": "Figure 9 · Merchant analytics"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "geochart"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.geochart.0205",
                "value": "Merchant GeoChart"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0206",
                "value": "An interactive heatmap showing global transaction distribution "
              },
              {
                "type": "element",
                "tag": "em",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.em.0207",
                    "value": "(white-label and Admin only)"
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
            "value": "\n"
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
                    "id": "dash-reports.b.0208",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0209",
                "value": " visualise cross-border performance; identify strong and underperforming regions; monitor activity by geographic zone (EU, GCC, Africa…)."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0210",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0211",
                "value": " date range; continent; merchant; currency; status."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.30.13_PM-2431d6f3fa46e377a2c0555963a2f887.png",
                      "alt": "Merchant GeoChart",
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
                    "id": "dash-reports.figcaption.0212",
                    "value": "Figure 10 · Merchant GeoChart"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "sensitivity"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.sensitivity.0213",
                "value": "Sensitivity Report"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0214",
                "value": "A diagnostic report showing how frequently a merchant (or customer email) sends transactions to the same Bank/MID in a short time frame, e.g. within 5 minutes "
              },
              {
                "type": "element",
                "tag": "em",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.em.0215",
                    "value": "(white-label merchants and Admin only)"
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
            "value": "\n"
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
                    "id": "dash-reports.b.0216",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0217",
                "value": " detect automated or abusive retry behaviour; enforce throttling rules; identify fraud patterns based on frequency."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0218",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0219",
                "value": " merchant; bank; currency; time interval (minutes)."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.31.08_PM-319e5fde62c013e8b3911eeb87cdace6.png",
                      "alt": "Sensitivity report",
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
                    "id": "dash-reports.figcaption.0220",
                    "value": "Figure 11 · Sensitivity report"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "approval-band"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.approval-band.0221",
                "value": "Approval Band Report"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0222",
                "value": "Breaks down merchant or bank performance into approval-rate bands (e.g. 90–100%, 70–89%) "
              },
              {
                "type": "element",
                "tag": "em",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.em.0223",
                    "value": "(white-label merchants and Admin only)"
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
            "value": "\n"
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
                    "id": "dash-reports.b.0224",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0225",
                "value": " classify banks or merchants by reliability; flag underperforming banks; define rule-based escalation or rerouting logic."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0226",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0227",
                "value": " merchant; bank; currency."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.32.06_PM-5146abaccf35bf6f452490a93c79fc51.png",
                      "alt": "Approval band report",
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
                    "id": "dash-reports.figcaption.0228",
                    "value": "Figure 12 · Approval band report"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "best-conditions"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.best-conditions.0229",
                "value": "Best Approval Conditions"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0230",
                "value": "Identifies parameter combinations yielding the best approval rates "
              },
              {
                "type": "element",
                "tag": "em",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.em.0231",
                    "value": "(white-label merchants and Admin only)"
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
            "value": "\n"
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
                    "id": "dash-reports.b.0232",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0233",
                "value": " build intelligent routing rules from data; discover ideal conditions (e.g. card brand + browser + IP); identify high-risk patterns (low approval + high chargeback)."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0234",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0235",
                "value": " routing rule; currency; payment method; merchant; bank/bank MID; transaction status, plus dimensions like merchant name, request IP country code, BIN number, trust score, card brand, browser, referer, email ID."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.32.44_PM-440050f7e1d37c846a02bc346598117e.png",
                      "alt": "Best approval conditions",
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
                    "id": "dash-reports.figcaption.0236",
                    "value": "Figure 13 · Best approval conditions"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "quality-index"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.quality-index.0237",
                "value": "Merchant Quality Index"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "em",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dash-reports.em.0238",
                    "value": "(White-label and Admin only.)"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0239",
                "value": " Coming soon."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "h3",
            "props": {
              "id": "trends"
            },
            "children": [
              {
                "type": "text",
                "id": "dash-reports.trends.0240",
                "value": "Trends and Forecasts"
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
          },
          {
            "type": "element",
            "tag": "p",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dash-reports.p.0241",
                "value": "Predicts future transaction behaviour from historical trends. Features: projected transaction count and amount for the current month, daily run rate, and daily/weekly/monthly graphs. Grouping: by merchant or by bank."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0242",
                    "value": "Use cases:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0243",
                "value": " forecast month-end volumes for cash-flow planning; track growth trajectory in real time; align marketing or sales with volume surges."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                    "id": "dash-reports.b.0244",
                    "value": "Filters:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dash-reports.p.0245",
                "value": " merchant; bank; currency; transaction status."
              }
            ]
          },
          {
            "type": "text",
            "value": "\n"
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.35.01_PM-628ee4ee58d7e7387525d2cb321cf236.png",
                      "alt": "Trends and forecasts",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-06-06_at_5.35.11_PM-1e2f649401f5740d3af75475371d2950.png",
                      "alt": "Trends and forecasts",
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
                    "id": "dash-reports.figcaption.0246",
                    "value": "Figure 14 · Trends and forecasts"
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
                  "updated": "Last updated 07 Jul 2026 · API v1"
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
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "pn",
                      "href": "/dash-payouts"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "dash-reports.small.0247",
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
                            "id": "dash-reports.b.0248",
                            "value": "← Payouts"
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
            "value": "\n"
          }
        ]
      }
    }
  ]
});
