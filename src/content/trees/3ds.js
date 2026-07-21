import { defineDocument } from '../schema.js';

export const page3dsTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "3ds",
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
                    "id": "3ds.doclink.0001",
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
                    "id": "3ds.doclink.0002",
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
                  "href": "/payment-methods"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.doclink.0003",
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
                "id": "3ds.div.0004",
                "value": "3D Secure"
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
                "id": "3ds.h1.0005",
                "value": "3D Secure"
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
                "id": "3ds.p.0006",
                "value": "How cardholder authentication works on Paysecure: frictionless and challenge flows, liability shift, SCA and exemptions."
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
                "id": "3ds.overview.0007",
                "value": "What is 3D Secure?"
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
                "id": "3ds.p.0008",
                "value": "3D Secure (3DS) is the card industry's authentication protocol for online payments, maintained by EMVCo and branded by the schemes as Visa Secure, Mastercard Identity Check and American Express SafeKey. Before a payment is authorised, the card issuer may verify that the person paying is the real cardholder, using a one-time passcode over SMS, an approval in the banking app, or biometrics such as a fingerprint or face scan."
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
                "id": "3ds.p.0009",
                "value": "The current version, "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.b.0010",
                    "value": "3DS2"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0011",
                "value": ", replaced the original 2001 protocol's static-password redirects with a data-driven design: the merchant side sends the issuer rich device and transaction data with every authentication, so the issuer can verify most legitimate customers silently, without showing them anything. Only riskier payments get an interactive challenge. On Paysecure, 3DS runs automatically on the hosted cashier and via the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.code.0012",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0013",
                "value": " step of the S2S flow; there is nothing separate to integrate."
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
                "id": "3ds.how-it-works.0014",
                "value": "How an authentication runs"
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
                "id": "3ds.p.0015",
                "value": "Every 3DS2 authentication follows the same shape: the transaction and device data travel through the scheme's directory server to the issuer's Access Control Server (ACS), the issuer scores the risk, and the payment continues down one of two paths."
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
                "tag": "svg",
                "props": {
                  "viewBox": "0 0 760 612",
                  "width": "100%",
                  "role": "img",
                  "aria-label": "Sequence diagram of a 3D Secure 2 authentication",
                  "xmlns": "http://www.w3.org/2000/svg",
                  "style": {
                    "display": "block"
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "defs",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "value": "\n            "
                      },
                      {
                        "type": "element",
                        "tag": "marker",
                        "props": {
                          "id": "tds-arr",
                          "viewBox": "0 0 10 10",
                          "refX": "9",
                          "refY": "5",
                          "markerWidth": "7",
                          "markerHeight": "7",
                          "orient": "auto-start-reverse"
                        },
                        "children": [
                          {
                            "type": "element",
                            "tag": "path",
                            "props": {
                              "d": "M0 0L10 5L0 10z",
                              "fill": "var(--muted)"
                            },
                            "children": []
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
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "80",
                      "y1": "42",
                      "x2": "80",
                      "y2": "560",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "250",
                      "y1": "42",
                      "x2": "250",
                      "y2": "560",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "430",
                      "y1": "42",
                      "x2": "430",
                      "y2": "560",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "590",
                      "y1": "42",
                      "x2": "590",
                      "y2": "560",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "705",
                      "y1": "42",
                      "x2": "705",
                      "y2": "560",
                      "stroke": "var(--border)",
                      "strokeDasharray": "4 4"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "30",
                      "y": "8",
                      "width": "100",
                      "height": "30",
                      "rx": "8",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "80",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0016",
                        "value": "Customer"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "190",
                      "y": "8",
                      "width": "120",
                      "height": "30",
                      "rx": "8",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "250",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0017",
                        "value": "Your server"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "370",
                      "y": "8",
                      "width": "120",
                      "height": "30",
                      "rx": "8",
                      "fill": "var(--purple)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "430",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "#FFFFFF",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0018",
                        "value": "Paysecure"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "525",
                      "y": "8",
                      "width": "130",
                      "height": "30",
                      "rx": "8",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "590",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0019",
                        "value": "Scheme (DS)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "650",
                      "y": "8",
                      "width": "105",
                      "height": "30",
                      "rx": "8",
                      "fill": "var(--purple-50)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "702",
                      "y": "27",
                      "textAnchor": "middle",
                      "fontSize": "12",
                      "fontWeight": "600",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0020",
                        "value": "Issuer (ACS)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "165",
                      "y": "78",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0021",
                        "value": "1 · Submits card details"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "80",
                      "y1": "86",
                      "x2": "246",
                      "y2": "86",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "340",
                      "y": "110",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0022",
                        "value": "2 · Payment with device"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "340",
                      "y": "123",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0023",
                        "value": "and transaction data"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "250",
                      "y1": "130",
                      "x2": "426",
                      "y2": "130",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "510",
                      "y": "154",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0024",
                        "value": "3 · Authentication request"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "510",
                      "y": "167",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0025",
                        "value": "via the directory server"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "430",
                      "y1": "174",
                      "x2": "586",
                      "y2": "174",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "647",
                      "y": "198",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0026",
                        "value": "4 · Risk data"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "647",
                      "y": "211",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0027",
                        "value": "to the ACS"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "590",
                      "y1": "218",
                      "x2": "701",
                      "y2": "218",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "630",
                      "y": "240",
                      "width": "120",
                      "height": "32",
                      "rx": "8",
                      "fill": "var(--bg-side)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "690",
                      "y": "253",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0028",
                        "value": "5 · Issuer risk"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "690",
                      "y": "266",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0029",
                        "value": "assessment"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "40",
                      "y": "302",
                      "fontSize": "10",
                      "fontWeight": "700",
                      "letterSpacing": "1",
                      "fill": "var(--green)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0030",
                        "value": "FRICTIONLESS PATH (LOW RISK)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "567",
                      "y": "322",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0031",
                        "value": "6 · Authenticated silently, no customer input"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "705",
                      "y1": "330",
                      "x2": "434",
                      "y2": "330",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "40",
                      "y": "366",
                      "fontSize": "10",
                      "fontWeight": "700",
                      "letterSpacing": "1",
                      "fill": "var(--amber)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0032",
                        "value": "CHALLENGE PATH (STEP-UP REQUIRED)"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "392",
                      "y": "386",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0033",
                        "value": "7 · Challenge screen: OTP, bank-app approval or biometric"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "705",
                      "y1": "394",
                      "x2": "84",
                      "y2": "394",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "392",
                      "y": "418",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0034",
                        "value": "8 · Customer completes the challenge"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "80",
                      "y1": "426",
                      "x2": "701",
                      "y2": "426",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "567",
                      "y": "450",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0035",
                        "value": "9 · Authentication result"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "705",
                      "y1": "458",
                      "x2": "434",
                      "y2": "458",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "rect",
                    "props": {
                      "x": "330",
                      "y": "480",
                      "width": "200",
                      "height": "32",
                      "rx": "8",
                      "fill": "var(--bg-side)",
                      "stroke": "var(--border)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "430",
                      "y": "493",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0036",
                        "value": "10 · Authorisation proceeds"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "430",
                      "y": "506",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--ink)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0037",
                        "value": "with the authentication proof"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "340",
                      "y": "530",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0038",
                        "value": "11 · Status "
                      },
                      {
                        "type": "element",
                        "tag": "tspan",
                        "props": {
                          "fontFamily": "'JetBrains Mono',monospace",
                          "fill": "var(--purple)"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "3ds.tspan.0039",
                            "value": "paid"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "3ds.text.0040",
                        "value": " or "
                      },
                      {
                        "type": "element",
                        "tag": "tspan",
                        "props": {
                          "fontFamily": "'JetBrains Mono',monospace",
                          "fill": "var(--purple)"
                        },
                        "children": [
                          {
                            "type": "text",
                            "id": "3ds.tspan.0041",
                            "value": "error"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "value": ","
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "340",
                      "y": "543",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--body)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0042",
                        "value": "signed webhook fires"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "line",
                    "props": {
                      "x1": "430",
                      "y1": "550",
                      "x2": "254",
                      "y2": "550",
                      "stroke": "var(--muted)",
                      "markerEnd": "url(#tds-arr)"
                    },
                    "children": []
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "380",
                      "y": "586",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0043",
                        "value": "A failed or abandoned challenge declines the payment. Successful authentication"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": "\n          "
                  },
                  {
                    "type": "element",
                    "tag": "text",
                    "props": {
                      "x": "380",
                      "y": "600",
                      "textAnchor": "middle",
                      "fontSize": "11",
                      "fill": "var(--muted)",
                      "fontFamily": "Inter,system-ui,sans-serif"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.text.0044",
                        "value": "shifts fraud chargeback liability from you to the issuer."
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
                "tag": "figcaption",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.figcaption.0045",
                    "value": "Figure 1: A 3DS2 authentication, showing the frictionless and challenge paths"
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
                "id": "3ds.p.0046",
                "value": "On the hosted cashier the whole sequence is handled for you. On an S2S integration, steps 3 to 9 run when you redirect the customer's browser to the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.code.0047",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0048",
                "value": " returned by the execute call; skipping the redirect leaves the purchase stuck and eventually "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.code.0049",
                    "value": "overdue"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0050",
                "value": ". Either way, treat the webhook, not the browser redirect, as the source of truth for the final status."
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
              "id": "frictionless"
            },
            "children": [
              {
                "type": "text",
                "id": "3ds.frictionless.0051",
                "value": "Frictionless vs challenge"
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
                                "id": "3ds.th.0052",
                                "value": "Outcome"
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
                                "id": "3ds.th.0053",
                                "value": "What happens"
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
                                "id": "3ds.th.0054",
                                "value": "Your job"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                  "className": "pill green"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "3ds.span.0055",
                                    "value": "Frictionless"
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
                                "id": "3ds.td.0056",
                                "value": "The issuer authenticates silently from the device and transaction data"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0057",
                                "value": "Nothing, payment continues automatically"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                  "className": "pill blue"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "3ds.span.0058",
                                    "value": "Challenge"
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
                                "id": "3ds.td.0059",
                                "value": "The customer completes an OTP, bank-app approval or biometric check"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0060",
                                "value": "Redirect to "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "3ds.code.0061",
                                    "value": "callback_url"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "3ds.td.0062",
                                "value": ", resume on return"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                  "className": "pill red"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "3ds.span.0063",
                                    "value": "Failed"
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
                                "id": "3ds.td.0064",
                                "value": "Authentication fails, times out or is abandoned"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0065",
                                "value": "Show a retry with a different card or method"
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
                "id": "3ds.p.0066",
                "value": "What tips a payment into the frictionless path is the quality of the data the issuer receives. The optional device fields on the S2S call ("
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.code.0067",
                    "value": "language"
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
                    "id": "3ds.code.0068",
                    "value": "javascript_enabled"
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
                    "id": "3ds.code.0069",
                    "value": "color_depth"
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
                    "id": "3ds.code.0070",
                    "value": "utc_offset"
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
                    "id": "3ds.code.0071",
                    "value": "screen_width"
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
                    "id": "3ds.code.0072",
                    "value": "screen_height"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0073",
                "value": " and the rest) feed the issuer's risk model, so send every field you can collect. Familiar signals, a recognised device, a returning customer, a modest amount, make silent approval more likely. There is no way to force the frictionless path; the issuer always has the final say."
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
              "id": "benefits"
            },
            "children": [
              {
                "type": "text",
                "id": "3ds.benefits.0074",
                "value": "Why 3DS matters"
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
                        "id": "3ds.b.0075",
                        "value": "Less fraud:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.li.0076",
                    "value": " a second factor between the card details and the authorisation blocks most stolen-card payments before they cost you a chargeback."
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
                        "id": "3ds.b.0077",
                        "value": "Liability shift:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.li.0078",
                    "value": " once the issuer authenticates a payment, fraud chargeback liability moves from you to the issuer. This is the single biggest commercial reason to run 3DS on risky traffic."
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
                        "id": "3ds.b.0079",
                        "value": "Regulatory compliance:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.li.0080",
                    "value": " in the EEA and UK, PSD2's Strong Customer Authentication rules make two-factor authentication mandatory for most online card payments. 3DS2 is the card industry's standard way to meet them."
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
                        "id": "3ds.b.0081",
                        "value": "Liability shift fine print."
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.p.0082",
                    "value": " The shift applies to authenticated payments, including \"attempted\" authentications where the scheme stands in for an issuer that cannot respond. It does not apply when 3DS is skipped or downgraded, and schemes treat edge cases differently, so check the rules for your main markets if chargebacks are a concern."
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
              "id": "sca"
            },
            "children": [
              {
                "type": "text",
                "id": "3ds.sca.0083",
                "value": "SCA and exemptions"
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
                "id": "3ds.p.0084",
                "value": "Strong Customer Authentication (SCA) is the PSD2 requirement, in force across the EEA and UK, that electronic payments be verified with two independent factors: something the customer knows (password), has (phone) or is (biometric). A 3DS2 challenge is the standard way a card payment satisfies SCA."
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
                "id": "3ds.p.0085",
                "value": "The regulation allows specific exemptions where authentication can be skipped to protect conversion. The common ones for online card payments:"
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
                                "id": "3ds.th.0086",
                                "value": "Exemption"
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
                                "id": "3ds.th.0087",
                                "value": "When it applies"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "3ds.b.0088",
                                    "value": "Low value"
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
                                "id": "3ds.td.0089",
                                "value": "Transactions under EUR 30, until the customer makes five in a row or EUR 100 cumulatively without authentication; then the issuer forces a challenge to reset the counters."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "3ds.b.0090",
                                    "value": "Transaction Risk Analysis (TRA)"
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
                                "id": "3ds.td.0091",
                                "value": "Low-risk transactions under a threshold tied to the acquirer's fraud rate. Applied by the acquirer or issuer; the issuer always decides whether to honour it."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "3ds.b.0092",
                                    "value": "Merchant-initiated (MIT)"
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
                                "id": "3ds.td.0093",
                                "value": "Off-session charges such as subscriptions are out of SCA scope. SCA applies once, when the mandate is set up with the customer present; later charges run against the "
                              },
                              {
                                "type": "element",
                                "tag": "DocLink",
                                "props": {
                                  "className": "inline",
                                  "href": "/product-recurring"
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "3ds.doclink.0094",
                                    "value": "mandate"
                                  }
                                ]
                              },
                              {
                                "type": "text",
                                "id": "3ds.td.0095",
                                "value": " without authentication."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "3ds.b.0096",
                                    "value": "MOTO"
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
                                "id": "3ds.td.0097",
                                "value": "Mail order and telephone order payments are out of scope."
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
                "id": "3ds.p.0098",
                "value": "Two things to keep in mind. Exemptions are requested, not guaranteed: the issuer can still demand a challenge (a \"soft decline\"), in which case the payment is retried with authentication. And an exempted payment does not get the liability shift, so fraud risk stays with you. Exemption strategy on Paysecure is configured at account level; talk to your account manager about what suits your traffic."
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
              "id": "threed-twod"
            },
            "children": [
              {
                "type": "text",
                "id": "3ds.threed-twod.0099",
                "value": "3D and 2D account configuration"
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
                "id": "3ds.p.0100",
                "value": "Whether a card payment is authenticated at all depends on how your Paysecure account is configured. "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.b.0101",
                    "value": "3D"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0102",
                "value": " accounts route eligible transactions through 3DS2, so the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.code.0103",
                    "value": "callback_url"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0104",
                "value": " redirect applies. "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.b.0105",
                    "value": "2D"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0106",
                "value": " accounts skip authentication entirely and the purchase moves straight to authorisation, which trades conversion friction for merchant-held fraud liability. Most live card traffic in SCA markets runs 3D."
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
                "id": "3ds.p.0107",
                "value": "Routing between the two is configurable: cascading rules in the dashboard's "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/dash-rule-engine"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "3ds.doclink.0108",
                    "value": "Rule Engine"
                  }
                ]
              },
              {
                "type": "text",
                "id": "3ds.p.0109",
                "value": " can retry a failed 2D transaction on another MID, including a 3D one, so a decline for missing authentication can recover automatically."
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
              "id": "saved-cards"
            },
            "children": [
              {
                "type": "text",
                "id": "3ds.saved-cards.0110",
                "value": "3DS with saved cards and wallets"
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
                                "id": "3ds.th.0111",
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
                                "id": "3ds.th.0112",
                                "value": "3DS treatment"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0113",
                                "value": "First payment, card saved"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0114",
                                "value": "Full 3DS, this customer-present payment also anchors the mandate for later MITs"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0115",
                                "value": "One-click repeat purchase (CIT with "
                              },
                              {
                                "type": "element",
                                "tag": "code",
                                "props": {},
                                "children": [
                                  {
                                    "type": "text",
                                    "id": "3ds.code.0116",
                                    "value": "token_reference"
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
                                "id": "3ds.td.0117",
                                "value": "3DS applies as normal, but a recognised returning customer is often approved frictionlessly"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0118",
                                "value": "Subscription or retry billing (MIT)"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0119",
                                "value": "Exempt, runs against the mandate with no customer present"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
                        "tag": "tr",
                        "props": {},
                        "children": [
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0120",
                                "value": "Google Pay and Apple Pay"
                              }
                            ]
                          },
                          {
                            "type": "element",
                            "tag": "td",
                            "props": {},
                            "children": [
                              {
                                "type": "text",
                                "id": "3ds.td.0121",
                                "value": "Wallet payments carry their own cryptogram-based authentication; the wallet's ECI value travels with the payment instead of a separate 3DS challenge in most flows"
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
                "id": "3ds.testing.0122",
                "value": "Testing 3DS"
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
                    "id": "3ds.li.0123",
                    "value": "Use the "
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
                        "id": "3ds.doclink.0124",
                        "value": "sandbox test cards"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.li.0125",
                    "value": " to exercise success, challenge and decline paths; the challenge OTP in sandbox is always "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.code.0126",
                        "value": "123456"
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
                    "id": "3ds.li.0127",
                    "value": "Test all three outcomes: frictionless approval, completed challenge, and failed or abandoned authentication"
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
                    "id": "3ds.li.0128",
                    "value": "Verify your webhook handling: the final "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.code.0129",
                        "value": "paid"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.li.0130",
                    "value": " or "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.code.0131",
                        "value": "error"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "3ds.li.0132",
                    "value": " arrives on the webhook, not the browser redirect"
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
                "id": "3ds.apis.0133",
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
                  "href": "/api-cards"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "h4",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "3ds.h4.0134",
                        "value": "Cards S2S API →"
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
                        "id": "3ds.p.0135",
                        "value": "Execute call, device fields, "
                      },
                      {
                        "type": "element",
                        "tag": "code",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "3ds.code.0136",
                            "value": "callback_url"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "id": "3ds.p.0137",
                        "value": " handling and the full 3DS sequence."
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
                        "id": "3ds.h4.0138",
                        "value": "Customers & mandates →"
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
                        "id": "3ds.p.0139",
                        "value": "CIT/MIT, mandate registration and recurring billing."
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
                  "updated": "Last updated 13 Jul 2026 · v2.4"
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
                      "href": "/cards-2d"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "3ds.small.0140",
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
                            "id": "3ds.b.0141",
                            "value": "← 2D payments"
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
                      "href": "/test-cards"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "3ds.small.0142",
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
                            "id": "3ds.b.0143",
                            "value": "Test cards →"
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
