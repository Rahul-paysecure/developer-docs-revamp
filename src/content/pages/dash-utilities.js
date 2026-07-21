import { createDashboardDocument } from '../schema.js';

export const dashUtilitiesDocument = createDashboardDocument({
  "slug": "dash-utilities",
  "current": "Utilities Module",
  "previous": {
    "href": "/dash-brand-settings",
    "label": "Brand Settings"
  },
  "next": {
    "href": "/dash-payouts",
    "label": "Payouts"
  },
  "blocks": [
    {
      "id": "utilities-module",
      "type": "heading",
      "level": 1,
      "text": "Utilities Module"
    },
    {
      "id": "lead",
      "type": "paragraph",
      "className": "lead",
      "content": [
        {
          "id": "run-1",
          "text": "Account-level utilities, conversion rates, bank and merchant whitelists, card search, email lists, and error categories."
        }
      ]
    },
    {
      "id": "paragraph",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "This module provides account-level configuration options, processing batch refunds, setting up conversion rates, and handling bank reconciliation: conversion rates · bank whitelist · merchant whitelist · search card · upload email list · error categories."
        }
      ]
    },
    {
      "id": "conversion-rates",
      "type": "heading",
      "level": 2,
      "anchor": "conversion-rates",
      "text": "Conversion Rates"
    },
    {
      "id": "paragraph-2",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Configure currency exchange settings on a pairwise basis. The conversion rate applies exclusively in the selected direction, to convert back from the target currency to the source currency, add a separate conversion pair. You can also apply a "
        },
        {
          "id": "run-2",
          "text": "risk factor",
          "bold": true
        },
        {
          "id": "run-3",
          "text": ", added as a percentage markup on the converted rate to manage market volatility. Review these rates regularly to stay current with market conditions."
        }
      ]
    },
    {
      "id": "steps",
      "type": "list",
      "ordered": true,
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Add Conversion Rate",
              "bold": true
            },
            {
              "id": "run-3",
              "text": "."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Select the source currency ("
            },
            {
              "id": "run-2",
              "text": "From Currency",
              "bold": true
            },
            {
              "id": "run-3",
              "text": ") and target currency ("
            },
            {
              "id": "run-4",
              "text": "To Currency",
              "bold": true
            },
            {
              "id": "run-5",
              "text": ")."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Enter the conversion rate."
            }
          ]
        },
        {
          "id": "item-4",
          "content": [
            {
              "id": "run-1",
              "text": "Specify the risk factor as a percentage markup."
            }
          ]
        }
      ]
    },
    {
      "id": "figure",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-06-04_at_3.44.34_PM-ae043d1dd818f41a915f525a424c33ab.png",
          "alt": "Conversion rates"
        }
      ],
      "caption": "Figure 1 · Conversion rates"
    },
    {
      "id": "bank-whitelist",
      "type": "heading",
      "level": 2,
      "anchor": "bank-whitelist",
      "text": "Bank Whitelist"
    },
    {
      "id": "paragraph-3",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Whitelist a set of card numbers for a specific bank."
        }
      ]
    },
    {
      "id": "steps-2",
      "type": "list",
      "ordered": true,
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Add Whitelist",
              "bold": true
            },
            {
              "id": "run-3",
              "text": "."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Upload a CSV file containing the card numbers (a sample CSV is available for download)."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Select the bank these cards should be whitelisted for."
            }
          ]
        },
        {
          "id": "item-4",
          "content": [
            {
              "id": "run-1",
              "text": "Upload the file to complete the setup."
            }
          ]
        }
      ]
    },
    {
      "id": "paragraph-4",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Use cases:",
          "bold": true
        },
        {
          "id": "run-2",
          "text": " when creating or updating a bank you can enable "
        },
        {
          "id": "run-3",
          "text": "Check Whitelist",
          "bold": true
        },
        {
          "id": "run-4",
          "text": " so only whitelisted cards are allowed through that bank; routing rules can also be tailored based on whitelisted card sets."
        }
      ]
    },
    {
      "id": "figure-2",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-06-04_at_4.54.55_PM-a966226f5a06b86572ae68b8be9da69e.png",
          "alt": "Bank whitelist"
        }
      ],
      "caption": "Figure 2 · Bank whitelist"
    },
    {
      "id": "merchant-whitelist",
      "type": "heading",
      "level": 2,
      "anchor": "merchant-whitelist",
      "text": "Merchant Whitelist"
    },
    {
      "id": "paragraph-5",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Approve card whitelists uploaded by merchants at the merchant level: merchants upload their card whitelist via the merchant portal; admins review and approve the list via the admin portal. Used for rule-based routing where transactions are processed based on pre-approved, merchant-specific card whitelists."
        }
      ]
    },
    {
      "id": "figure-3",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-06-04_at_4.56.51_PM-b37b95e4f158bfff7c2f658c635ebb46.png",
          "alt": "Merchant whitelist"
        }
      ],
      "caption": "Figure 3 · Merchant whitelist approval"
    },
    {
      "id": "search-card",
      "type": "heading",
      "level": 2,
      "anchor": "search-card",
      "text": "Search Card"
    },
    {
      "id": "paragraph-6",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Search any card number to verify its whitelist status, globally whitelisted or bank-specific. Mainly used for operational support and debugging."
        }
      ]
    },
    {
      "id": "figure-4",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-06-04_at_4.58.08_PM-3ba130c7e6748d034e4d2ac1e58eaa9e.png",
          "alt": "Search card"
        }
      ],
      "caption": "Figure 4 · Search card"
    },
    {
      "id": "email-list",
      "type": "heading",
      "level": 2,
      "anchor": "email-list",
      "text": "Upload Email List"
    },
    {
      "id": "paragraph-7",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Upload email addresses for whitelisting or blacklisting."
        }
      ]
    },
    {
      "id": "steps-3",
      "type": "list",
      "ordered": true,
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Prepare the email list in CSV or XLSX format (a sample template is available)."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Select whether to add the list to the "
            },
            {
              "id": "run-2",
              "text": "Whitelist",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " or "
            },
            {
              "id": "run-4",
              "text": "Blacklist",
              "bold": true
            },
            {
              "id": "run-5",
              "text": "."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Upload",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " to complete the process."
            }
          ]
        }
      ]
    },
    {
      "id": "paragraph-8",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Helpful for routing rules based on customer email addresses."
        }
      ]
    },
    {
      "id": "figure-5",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-06-04_at_4.58.52_PM-08457a614e351199424e9f8b91035fed.png",
          "alt": "Email list upload"
        }
      ],
      "caption": "Figure 5 · Upload email list"
    },
    {
      "id": "error-category",
      "type": "heading",
      "level": 2,
      "anchor": "error-category",
      "text": "Error Category"
    },
    {
      "id": "paragraph-9",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Create and manage custom error categories by grouping relevant error codes."
        }
      ]
    },
    {
      "id": "steps-4",
      "type": "list",
      "ordered": true,
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Add More Category",
              "bold": true
            },
            {
              "id": "run-3",
              "text": "."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Enter a category name and save it."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Map error codes to the category by selecting the codes, choosing the category, and clicking "
            },
            {
              "id": "run-2",
              "text": "Add",
              "bold": true
            },
            {
              "id": "run-3",
              "text": "."
            }
          ]
        }
      ]
    },
    {
      "id": "paragraph-10",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Improves efficiency when configuring routing and cascading rules by grouping related errors."
        }
      ]
    },
    {
      "id": "figure-6",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-06-04_at_4.59.24_PM-70d1e52ab23dbed3a51b00cff06dc190.png",
          "alt": "Error categories"
        }
      ],
      "caption": "Figure 6 · Error categories"
    }
  ]
});
