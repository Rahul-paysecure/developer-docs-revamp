import { defineDocument } from '../schema.js';

export const dashboardTreeDocument = defineDocument({
  "schemaVersion": 1,
  "slug": "dashboard",
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
                    "id": "dashboard.doclink.0001",
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
                    "id": "dashboard.doclink.0002",
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
                "id": "dashboard.div.0003",
                "value": "Merchant onboarding & configuration"
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
                "id": "dashboard.h1.0004",
                "value": "Merchant Onboarding and Configuration"
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
                "id": "dashboard.p.0005",
                "value": "The entire onboarding process for a new white-label account: account creation workflows, security and KYB verifications, pre-live configuration, API integrations, dashboard settings, and the transition to live transactions."
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
                          "d": "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M8 2v16M16 6v16"
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
                        "id": "dashboard.b.0006",
                        "value": "This guide covers:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0007",
                    "value": " account creation workflows · security and KYB verifications · pre-live configuration · API integrations · dashboard settings · transaction processing and settlements. Follow the steps in order for a smooth setup and transition to live transactions."
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
              "id": "onboarding"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.onboarding.0008",
                "value": "1. Merchant Account Creation"
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
              "id": "account-create"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.account-create.0009",
                "value": "1.1 Creating a New White-Label Merchant"
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
                "id": "dashboard.p.0010",
                "value": "To onboard a new merchant, a white-label account must be created from the admin panel. Click "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0011",
                    "value": "Add Role"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0012",
                "value": " and provide the email address of the primary contact for the account. Select the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0013",
                    "value": "Role"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0014",
                "value": " of the user from the drop-down menu and click "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0015",
                    "value": "Add Role"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0016",
                "value": " to create the account."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_4.34.38_PM-40997d6e1cef0178f232992db5f911ee.png",
                      "alt": "Add Role dialog in the admin panel",
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
                    "id": "dashboard.figcaption.0017",
                    "value": "Figure 1 · Creating a new white-label merchant: Add Role"
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
            "tag": "h3",
            "props": {
              "id": "email-verify"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.email-verify.0018",
                "value": "1.2 Email Verification and Password Setup"
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
                "id": "dashboard.p.0019",
                "value": "After the account is created, the merchant receives an email notification with instructions to verify their email address. Once verified, the merchant is prompted to generate a new password."
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_4.35.23_PM-911dea15d178d5e4abd507238e37f119.png",
                      "alt": "Email verification screen",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_4.37.00_PM-01729148cb4ae4682a8e4c8c0fb59f62.png",
                      "alt": "Password setup screen",
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
                    "id": "dashboard.figcaption.0020",
                    "value": "Figure 2 · Email verification and password setup"
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
            "tag": "h3",
            "props": {
              "id": "tfa"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.tfa.0021",
                "value": "1.3 Two-Factor Authentication (2FA) Registration"
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
                "id": "dashboard.p.0022",
                "value": "Following password creation, 2FA registration is required. The merchant must scan the QR code using the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0023",
                    "value": "Google Authenticator"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0024",
                "value": " app (Play Store / App Store). After 2FA is registered, the merchant is prompted to log in again. The Google Authenticator code is required on every subsequent login."
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_4.42.24_PM-30921123bbf2911780b706976a77851c.png",
                      "alt": "2FA QR code registration",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_4.49.56_PM-dd1867b9c8d6486eb2c786eceeea81a3.png",
                      "alt": "2FA login prompt",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_4.50.19_PM-0eb49b2407fa85a1fd20ff69f87b6b26.png",
                      "alt": "Authenticator code entry",
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
                    "id": "dashboard.figcaption.0025",
                    "value": "Figure 3 · 2FA registration with Google Authenticator"
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
            "tag": "h3",
            "props": {
              "id": "kyb"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.kyb.0026",
                "value": "1.4 KYB Form Submission"
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
                "id": "dashboard.p.0027",
                "value": "During account creation the merchant receives KYB requirements from the accounts team, which must be filled out and submitted. Upon approval, the merchant can access their full account details via the portal."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.10.36_PM-59148e82836112d47c7479e742de1ace.png",
                      "alt": "KYB form",
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
                    "id": "dashboard.figcaption.0028",
                    "value": "Figure 4 · KYB form submission"
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
              "id": "pre-live"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.pre-live.0029",
                "value": "2. Pre-Live Configuration"
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
                "id": "dashboard.p.0030",
                "value": "Before processing live transactions, several configurations must be completed: currency, payment methods, services offered, risk caps, limits and charges, and Merchant Discount Rates (MDRs)."
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
              "id": "currency"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.currency.0031",
                "value": "2.1 Currency Selection"
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
                "id": "dashboard.p.0032",
                "value": "Select the currencies you wish to process. Only the chosen currencies are available for transactions."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.14.13_PM-0f3eb9bfae5408f8465750f5b5ce9f8a.png",
                      "alt": "Currency selection screen",
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
                    "id": "dashboard.figcaption.0033",
                    "value": "Figure 5 · Currency selection"
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
            "tag": "h3",
            "props": {
              "id": "methods"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.methods.0034",
                "value": "2.2 Payment Methods Selection"
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
                "id": "dashboard.p.0035",
                "value": "Choose from the allowed payment methods available within the platform."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.15.49_PM-98bf04b944694ba6b1e7dbe2af2c0fcc.png",
                      "alt": "Payment methods selection screen",
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
                    "id": "dashboard.figcaption.0036",
                    "value": "Figure 6 · Payment methods selection"
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
            "tag": "h3",
            "props": {
              "id": "services"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.services.0037",
                "value": "2.3 Service Enablement"
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
                "id": "dashboard.p.0038",
                "value": "Enable the services you wish to offer, such as value-added services or specific transaction types."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.20.37_PM-8ab19927621f808ef650f6b49224341f.png",
                      "alt": "Service enablement screen",
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
                    "id": "dashboard.figcaption.0039",
                    "value": "Figure 7 · Service enablement"
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
            "tag": "h3",
            "props": {
              "id": "risk"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.risk.0040",
                "value": "2.4 Risk Capping Configuration"
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
                "id": "dashboard.p.0041",
                "value": "To manage potential losses (e.g. from currency conversion or other exposures), set risk caps on transactions."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.23.20_PM-3d17f34f89c4b346d69ba1d7e2167151.png",
                      "alt": "Risk capping configuration screen",
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
                    "id": "dashboard.figcaption.0042",
                    "value": "Figure 8 · Risk capping configuration"
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
            "tag": "h3",
            "props": {
              "id": "limits"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.limits.0043",
                "value": "2.5 Setting Limits and Charges"
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
                "id": "dashboard.p.0044",
                "value": "Limits and charges can be set for individual currency–payment-method pairs, or as common parameters for all pairs, via the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0045",
                    "value": "Merchant Profile"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0046",
                "value": " menu in the sidebar."
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
                        "id": "dashboard.b.0047",
                        "value": "Configure limits:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0048",
                    "value": " maximum transaction "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0049",
                        "value": "counts"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0050",
                    "value": " (hourly, daily, weekly, monthly) and "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0051",
                        "value": "amount limits"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0052",
                    "value": " (per transaction and cumulative) across various timeframes."
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
                        "id": "dashboard.b.0053",
                        "value": "Configure charges:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0054",
                    "value": " transaction fees, fund fees, AMC, rolling reserve percentages, decline fees, and the currency standard designation ("
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0055",
                        "value": "Major"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0056",
                    "value": " or "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0057",
                        "value": "Minor"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "value": ")."
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
                        "id": "dashboard.b.0058",
                        "value": "Configure MDR rates:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0059",
                    "value": " Merchant Discount Rates based on "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0060",
                        "value": "volume ranges"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0061",
                    "value": " (in millions)."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.51.50_PM-bc6df875b315584bab260e6c6e719ead.png",
                      "alt": "Limits configuration screen",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.53.31_PM-64ad007ee880e8451c8c197cea9c9f01.png",
                      "alt": "Charges configuration screen",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.56.55_PM-06915ac38e118638dd60bfdc7ff42f4d.png",
                      "alt": "Charges detail screen",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_5.58.58_PM-00016e3daa613c2e9892834a902b8ad3.png",
                      "alt": "MDR configuration screen",
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
                    "id": "dashboard.figcaption.0062",
                    "value": "Figure 9 · Setting limits, charges and MDR rates"
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
                        "id": "dashboard.b.0063",
                        "value": "Common integration error:"
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
                        "id": "dashboard.code.0064",
                        "value": "Merchant Limit is not set"
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
                        "id": "dashboard.code.0065",
                        "value": "Minimum amount is not set"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0066",
                    "value": " mean this section is incomplete, finish limits & charges before testing. See "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/errors#error-messages"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.doclink.0067",
                        "value": "error messages"
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
            "props": {
              "id": "user-mgmt"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.user-mgmt.0068",
                "value": "2.6 User Management"
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
                "id": "dashboard.p.0069",
                "value": "Add multiple users to the account for efficient team management."
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
                  "className": "imgs multi"
                },
                "children": [
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.02.20_PM-abb368b0fd748809b5c73f8ab544054b.png",
                      "alt": "User management screen",
                      "loading": "lazy"
                    },
                    "children": []
                  },
                  {
                    "type": "element",
                    "tag": "img",
                    "props": {
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.08.57_PM-0545c775cd0e4c733b9ce40b8ffa5a0b.png",
                      "alt": "Add user screen",
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
                    "id": "dashboard.figcaption.0070",
                    "value": "Figure 10 · User management"
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
                    "id": "dashboard.p.0071",
                    "value": "Once the merchant profile is fully set up, API integration can begin, see the "
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
                        "id": "dashboard.doclink.0072",
                        "value": "Quickstart"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0073",
                    "value": " and "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-reference"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.doclink.0074",
                        "value": "API Reference"
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
              "id": "dashboard-config"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.dashboard-config.0075",
                "value": "3. API Integration and Dashboard Configuration"
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
                "id": "dashboard.p.0076",
                "value": "Before commencing merchant-level testing, complete these configurations from the dashboard."
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
              "id": "modes"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.modes.0077",
                "value": "3.1 Mode Switching: Sandbox vs. Production"
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
                "id": "dashboard.p.0078",
                "value": "Toggle between "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0079",
                    "value": "sandbox"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0080",
                "value": " (for testing integrations and new features without impacting live transactions; only Visa and Mastercard "
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
                    "id": "dashboard.doclink.0081",
                    "value": "test cards"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0082",
                "value": " are supported) and "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0083",
                    "value": "production"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0084",
                "value": " (live transactions)."
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
                    "id": "dashboard.li.0085",
                    "value": "Locate the mode toggle at the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0086",
                        "value": "top-right corner"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0087",
                    "value": " of the dashboard, under the profile section."
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
                    "id": "dashboard.li.0088",
                    "value": "Click the toggle to switch between sandbox and production."
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
                    "id": "dashboard.li.0089",
                    "value": "Confirm your selection in the pop-up confirmation dialog."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.34.53_PM-ab5edbfda2088e982c4d9106804eefee.png",
                      "alt": "Sandbox / production mode toggle",
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
                    "id": "dashboard.figcaption.0090",
                    "value": "Figure 11 · Mode switching, sandbox vs. production"
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
            "tag": "h3",
            "props": {
              "id": "api-keys"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.api-keys.0091",
                "value": "3.2 API Keys"
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
                "id": "dashboard.p.0092",
                "value": "The "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0093",
                    "value": "API Keys"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0094",
                "value": " module authenticates every API call. The Auth Key is a Bearer token used in the request header of every endpoint."
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
                    "id": "dashboard.li.0095",
                    "value": "Navigate to the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0096",
                        "value": "API Keys"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0097",
                    "value": " section."
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
                    "id": "dashboard.li.0098",
                    "value": "Click "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0099",
                        "value": "Generate Key"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0100",
                    "value": " to open the modal window."
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
                    "id": "dashboard.li.0101",
                    "value": "Enter a descriptive title (e.g. \"Production Key – Website Integration\")."
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
                    "id": "dashboard.li.0102",
                    "value": "Click "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0103",
                        "value": "Generate"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0104",
                    "value": ": the key lists with its creation date and status."
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
                    "id": "dashboard.b.0105",
                    "value": "Usage:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0106",
                "value": " include the key as a Bearer token in every API call: "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.code.0107",
                    "value": "Authorization: Bearer <YOUR_API_KEY>"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0108",
                "value": ". Full auth details in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-reference"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.doclink.0109",
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.37.06_PM-b2eebe50766e7e327b191203cd6de8a9.png",
                      "alt": "Generate Key modal",
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
                    "id": "dashboard.figcaption.0110",
                    "value": "Figure 12 · API Keys: Generate Key"
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
            "tag": "h3",
            "props": {
              "id": "brands"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.brands.0111",
                "value": "3.3 Brands Setup"
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
                "id": "dashboard.p.0112",
                "value": "For white-label merchants, a "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0113",
                    "value": "brand represents the sub-merchants under the white-label entity's control"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0114",
                "value": ". Many API calls require a "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.code.0115",
                    "value": "Brand ID"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0116",
                "value": " to uniquely identify the merchant brand."
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
                    "id": "dashboard.li.0117",
                    "value": "Navigate to the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0118",
                        "value": "Brands"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0119",
                    "value": " tab on the dashboard."
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
                    "id": "dashboard.li.0120",
                    "value": "Click "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0121",
                        "value": "Generate Brand"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0122",
                    "value": " and enter a title (e.g. \"Main Website\" or \"Mobile App\")."
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
                    "id": "dashboard.li.0123",
                    "value": "Once generated, the Brand ID displays and can be copied for use in API requests."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.37.49_PM-781d0c4696d6103a52fab3848cce6779.png",
                      "alt": "Generate Brand dialog",
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
                    "id": "dashboard.figcaption.0124",
                    "value": "Figure 13 · Brands setup: Generate Brand"
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
                          "d": "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M7 7h.01"
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
                        "id": "dashboard.b.0125",
                        "value": "Header vs body:"
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
                        "id": "dashboard.code.0126",
                        "value": "brand_id"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0127",
                    "value": " goes in the purchase request body; the "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.code.0128",
                        "value": "BrandId"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0129",
                    "value": " header is mandatory on Session APIs and optional on Customer APIs, see "
                  },
                  {
                    "type": "element",
                    "tag": "DocLink",
                    "props": {
                      "className": "inline",
                      "href": "/api-reference#headers"
                    },
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.doclink.0130",
                        "value": "request headers"
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
            "props": {
              "id": "webhooks-config"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.webhooks-config.0131",
                "value": "3.4 Webhook Configuration"
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
                "id": "dashboard.p.0132",
                "value": "Webhooks enable real-time notifications for transaction events. Configure a callback URL to receive event notifications, scoped to an individual payment method or universally to all methods."
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
                    "id": "dashboard.li.0133",
                    "value": "Click the "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0134",
                        "value": "New Webhook"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0135",
                    "value": " button."
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
                    "id": "dashboard.li.0136",
                    "value": "Enter a descriptive "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0137",
                        "value": "name"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0138",
                    "value": ", choose a "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0139",
                        "value": "payment method"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0140",
                    "value": " (or \"All\" for universal callbacks), enter the callback "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0141",
                        "value": "URL"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0142",
                    "value": ", and select "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0143",
                        "value": "event triggers"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0144",
                    "value": ": not all events are available for every payment method."
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
                    "id": "dashboard.li.0145",
                    "value": "Click "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0146",
                        "value": "Save"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0147",
                    "value": " to store the webhook configuration."
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.38.37_PM-6428f1b51ddf8818f685dcf5af3b2b9f.png",
                      "alt": "New Webhook form",
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
                    "id": "dashboard.figcaption.0148",
                    "value": "Figure 14 · Webhook configuration: New Webhook"
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
            "tag": "h3",
            "props": {},
            "children": [
              {
                "type": "text",
                "id": "dashboard.h3.0149",
                "value": "Available event triggers"
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
                                "id": "dashboard.th.0150",
                                "value": "Event trigger"
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
                                "id": "dashboard.th.0151",
                                "value": "Fires when"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0152",
                                    "value": "purchase created"
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
                                "id": "dashboard.td.0153",
                                "value": "A new purchase is initialised"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0154",
                                    "value": "payment in progress"
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
                                "id": "dashboard.td.0155",
                                "value": "Payment initiated, awaiting confirmation"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0156",
                                    "value": "purchase hold"
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
                                "id": "dashboard.td.0157",
                                "value": "Funds held on card (pre-authorisation)"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0158",
                                    "value": "hold release"
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
                                "id": "dashboard.td.0159",
                                "value": "A pre-auth hold is released"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0160",
                                    "value": "purchase paid"
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
                                "id": "dashboard.td.0161",
                                "value": "Payment completed successfully"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0162",
                                    "value": "purchase failed"
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
                                "id": "dashboard.td.0163",
                                "value": "Payment attempt failed"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0164",
                                    "value": "purchase cancelled"
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
                                "id": "dashboard.td.0165",
                                "value": "Cancelled by customer or system"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0166",
                                    "value": "purchase overdue"
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
                                "id": "dashboard.td.0167",
                                "value": "Not completed within the overdue window"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0168",
                                    "value": "purchase expired"
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
                                "id": "dashboard.td.0169",
                                "value": "Not paid within the expiry window"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0170",
                                    "value": "refund in progress"
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
                                "id": "dashboard.td.0171",
                                "value": "Refund initiated, not yet settled"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "element",
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
                                    "id": "dashboard.code.0172",
                                    "value": "payment refund"
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
                                "id": "dashboard.td.0173",
                                "value": "Refund completed"
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
                        "id": "dashboard.b.0174",
                        "value": "Precedence:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0175",
                    "value": " success/failure callback URLs passed directly in a purchase request "
                  },
                  {
                    "type": "element",
                    "tag": "b",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.b.0176",
                        "value": "override"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0177",
                    "value": " the dashboard webhook settings. Payout callback URLs must be set within the payout API itself."
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
                "id": "dashboard.p.0178",
                "value": "Payload shapes and signature verification live in the "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/webhooks"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.doclink.0179",
                    "value": "webhooks reference"
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
            "props": {
              "id": "public-key"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.public-key.0180",
                "value": "3.5 Public Key Usage"
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
                "id": "dashboard.p.0181",
                "value": "The public key verifies hash signatures and validates payload responses, proving deliveries are secure and untampered. It is available in the "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0182",
                    "value": "Public Key"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0183",
                "value": " section of the dashboard and is used together with the corresponding private key for data validation and webhook verification, verify the "
              },
              {
                "type": "element",
                "tag": "code",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.code.0184",
                    "value": "paysecure-sign"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0185",
                "value": " header on every webhook. "
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
                    "id": "dashboard.doclink.0186",
                    "value": "Verification guide →"
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.39.40_PM-12928977d8873e5201633c7e186bd2f7.png",
                      "alt": "Public Key section",
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
                    "id": "dashboard.figcaption.0187",
                    "value": "Figure 15 · Public Key section"
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
            "tag": "h3",
            "props": {
              "id": "expiry"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.expiry.0188",
                "value": "3.6 Settings and Transaction Expiry"
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
                "id": "dashboard.p.0189",
                "value": "The "
              },
              {
                "type": "element",
                "tag": "b",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.b.0190",
                    "value": "Settings"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0191",
                "value": " module adjusts parameters for specific payment methods, most importantly APM expiry:"
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
                        "id": "dashboard.b.0192",
                        "value": "Purpose:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0193",
                    "value": " set expiry minutes for Alternative Payment Methods (APMs) that support expiry configuration."
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
                        "id": "dashboard.b.0194",
                        "value": "How it works:"
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
                        "id": "dashboard.code.0195",
                        "value": "purchase.expireInMin"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0196",
                    "value": " can be passed in the API request, if provided, it takes precedence over the dashboard default."
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
                        "id": "dashboard.b.0197",
                        "value": "Functionality:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.li.0198",
                    "value": " defines the completion window (e.g. for Interac payments); payments not completed in the window are automatically marked "
                  },
                  {
                    "type": "element",
                    "tag": "code",
                    "props": {},
                    "children": [
                      {
                        "type": "text",
                        "id": "dashboard.code.0199",
                        "value": "EXPIRED"
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
                      "src": "/assets/images/Screenshot_2025-02-27_at_6.40.25_PM-ccae7442360ab8d788bb977e2c3b4d95.png",
                      "alt": "Settings module",
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
                    "id": "dashboard.figcaption.0200",
                    "value": "Figure 16 · Settings, transaction expiry"
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
                          "d": "M9 18h6M10 22h4"
                        },
                        "children": []
                      },
                      {
                        "type": "element",
                        "tag": "path",
                        "props": {
                          "d": "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"
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
                        "id": "dashboard.b.0201",
                        "value": "Best practices:"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "id": "dashboard.p.0202",
                    "value": " set an appropriate expiry time, communicate the payment window clearly to customers, and reconcile any discrepancies between your records and customers' bank transactions during settlement."
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
              "id": "go-live"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.go-live.0203",
                "value": "4. Testing and Go-Live Process"
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
                "id": "dashboard.p.0204",
                "value": "After completing KYB and pre-live configuration, perform sandbox testing using the designated "
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
                    "id": "dashboard.doclink.0205",
                    "value": "test cards"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0206",
                "value": " (only Visa and Mastercard are supported in sandbox mode). Once sandbox testing succeeds, the accounts team notifies the merchant that they are ready to go live."
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
                    "id": "dashboard.li.0207",
                    "value": "KYB approved and pre-live configuration complete"
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
                    "id": "dashboard.li.0208",
                    "value": "Sandbox testing done with the designated Visa/Mastercard test cards"
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
                    "id": "dashboard.li.0209",
                    "value": "Accounts team confirms you're ready to go live"
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
                        "id": "dashboard.b.0210",
                        "value": "Brand-level configuration verified before going live"
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
                    "id": "dashboard.li.0211",
                    "value": "Switch to production mode, generate live keys, process live transactions"
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
              "id": "additional-info"
            },
            "children": [
              {
                "type": "text",
                "id": "dashboard.additional-info.0212",
                "value": "5. Additional Information"
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
                    "id": "dashboard.b.0213",
                    "value": "API integration:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0214",
                "value": " for detailed API documentation, integration guides and references, head to the "
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
                    "id": "dashboard.doclink.0215",
                    "value": "Quickstart"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0216",
                "value": " and "
              },
              {
                "type": "element",
                "tag": "DocLink",
                "props": {
                  "className": "inline",
                  "href": "/api-reference"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.doclink.0217",
                    "value": "API Reference"
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
                    "id": "dashboard.b.0218",
                    "value": "Support:"
                  }
                ]
              },
              {
                "type": "text",
                "id": "dashboard.p.0219",
                "value": " the support team is available throughout the integration process for technical and operational assistance: "
              },
              {
                "type": "element",
                "tag": "a",
                "props": {
                  "className": "inline",
                  "href": "mailto:info@paysecure.net"
                },
                "children": [
                  {
                    "type": "text",
                    "id": "dashboard.a.0220",
                    "value": "info@paysecure.net"
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
                            "id": "dashboard.small.0221",
                            "value": "Home"
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
                            "id": "dashboard.b.0222",
                            "value": "← Documentation home"
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
                      "href": "/dash-dashboard"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "small",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "id": "dashboard.small.0223",
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
                            "id": "dashboard.b.0224",
                            "value": "Dashboard →"
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
