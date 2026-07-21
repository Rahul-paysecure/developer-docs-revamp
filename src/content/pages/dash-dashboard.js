import { createDashboardDocument } from '../schema.js';

export const dashDashboardDocument = createDashboardDocument({
  "slug": "dash-dashboard",
  "current": "Dashboard",
  "previous": {
    "href": "/dashboard",
    "label": "Merchant Onboarding and Configuration"
  },
  "next": {
    "href": "/dash-manage-roles",
    "label": "Manage Roles"
  },
  "blocks": [
    {
      "id": "dashboard",
      "type": "heading",
      "level": 1,
      "text": "Dashboard"
    },
    {
      "id": "lead",
      "type": "paragraph",
      "className": "lead",
      "content": [
        {
          "id": "run-1",
          "text": "How each module on the merchant dashboard works, statistics, mode switching, API keys, brands, webhooks, public key and settings."
        }
      ]
    },
    {
      "id": "introduction",
      "type": "heading",
      "level": 2,
      "anchor": "introduction",
      "text": "1. Introduction"
    },
    {
      "id": "paragraph",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "This guide explains how each module on the Dashboard works, with actionable steps for:"
        }
      ]
    },
    {
      "id": "list",
      "type": "list",
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Setting up the account and switching between production and sandbox modes."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Generating and managing API keys and Brand IDs."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Configuring webhooks for various transaction events."
            }
          ]
        },
        {
          "id": "item-4",
          "content": [
            {
              "id": "run-1",
              "text": "Using public keys to verify hash signatures."
            }
          ]
        },
        {
          "id": "item-5",
          "content": [
            {
              "id": "run-1",
              "text": "Setting parameters such as expiry minutes for specific payment methods."
            }
          ]
        }
      ]
    },
    {
      "id": "overview",
      "type": "heading",
      "level": 2,
      "anchor": "overview",
      "text": "2. Dashboard Overview"
    },
    {
      "id": "statistics",
      "type": "heading",
      "level": 3,
      "anchor": "statistics",
      "text": "2.1 Statistics Module"
    },
    {
      "id": "paragraph-2",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "The dashboard offers an overview of both payin and payout statistics:"
        }
      ]
    },
    {
      "id": "list-2",
      "type": "list",
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Transaction counts",
              "bold": true
            },
            {
              "id": "run-2",
              "text": ": totals categorised by status (Expired, Error, Paid, Payment in Progress, Refunded) across daily, weekly, monthly and yearly timeframes."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Time-filtered geo chart",
              "bold": true
            },
            {
              "id": "run-2",
              "text": ": a geographical breakdown of transaction values and volumes, filterable by time period for country-specific data."
            }
          ]
        }
      ]
    },
    {
      "id": "paragraph-3",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Usage:",
          "bold": true
        },
        {
          "id": "run-2",
          "text": " the default view after login displays key metrics, hover over a metric for a breakdown by status. Select a timeframe from the dropdown and use the geo chart filter to view transactions by country. The dashboard auto-refreshes periodically; you can also refresh manually."
        }
      ]
    },
    {
      "id": "figure",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.22.12_PM-8fbc76d8a29cc2426a8575b5d6622008.png",
          "alt": "Statistics module"
        },
        {
          "id": "image-2",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.29.12_PM-80d56c5d38ca386a3f1e8eecd5457613.png",
          "alt": "Statistics module"
        }
      ],
      "caption": "Figure 1 · Statistics module, transaction counts and geo chart"
    },
    {
      "id": "modes",
      "type": "heading",
      "level": 3,
      "anchor": "modes",
      "text": "2.2 Mode Switching: Sandbox vs. Production"
    },
    {
      "id": "paragraph-4",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Sandbox mode",
          "bold": true
        },
        {
          "id": "run-2",
          "text": " is for testing integrations and new features without affecting live transactions; "
        },
        {
          "id": "run-3",
          "text": "production mode",
          "bold": true
        },
        {
          "id": "run-4",
          "text": " processes live transactions."
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
              "text": "Locate the mode toggle at the top-right corner of the dashboard, under the profile section."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Click the toggle to switch between sandbox and production."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Confirm your selection in the pop-up confirmation dialog."
            }
          ]
        }
      ]
    },
    {
      "id": "figure-2",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.24.52_PM-0d1fe84464ec7dc80eb00d36c45b3423.png",
          "alt": "Mode toggle"
        }
      ],
      "caption": "Figure 2 · Mode toggle with confirmation dialog"
    },
    {
      "id": "api-keys",
      "type": "heading",
      "level": 2,
      "anchor": "api-keys",
      "text": "3. API Keys"
    },
    {
      "id": "paragraph-5",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "The API Keys module authenticates requests to the Paysecure API. Merchants under a white-label account see additional tabs on the dashboard to generate API Keys, Brand IDs and more. The "
        },
        {
          "id": "run-2",
          "text": "Auth Key (Bearer token)",
          "bold": true
        },
        {
          "id": "run-3",
          "text": " is used in the request header when calling any API endpoint."
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
              "text": "Navigate to the "
            },
            {
              "id": "run-2",
              "text": "API Keys",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " section from the dashboard menu."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Generate Key",
              "bold": true
            },
            {
              "id": "run-3",
              "text": ": a modal window opens."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Enter a descriptive title (e.g. \"Production Key – Website Integration\")."
            }
          ]
        },
        {
          "id": "item-4",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Generate",
              "bold": true
            },
            {
              "id": "run-3",
              "text": ": the key appears in the list with creation date and status."
            }
          ]
        }
      ]
    },
    {
      "id": "paragraph-6",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Include the key as a Bearer token in the header of every API call: "
        },
        {
          "id": "run-2",
          "text": "Authorization: Bearer <YOUR_API_KEY>",
          "code": true
        }
      ]
    },
    {
      "id": "figure-3",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.30.51_PM-0b4e555e0e72b6e27e7df2937b1fb02d.png",
          "alt": "Generate API key"
        },
        {
          "id": "image-2",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.41.57_PM-1ba2da6404c94d63710a3a00a96426c9.png",
          "alt": "Generate API key"
        }
      ],
      "caption": "Figure 3 · Generating an API key"
    },
    {
      "id": "brands",
      "type": "heading",
      "level": 2,
      "anchor": "brands",
      "text": "4. Brands"
    },
    {
      "id": "paragraph-7",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Certain API calls require a "
        },
        {
          "id": "run-2",
          "text": "Brand ID",
          "code": true
        },
        {
          "id": "run-3",
          "text": ", which uniquely identifies the merchant brand."
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
              "text": "Navigate to the "
            },
            {
              "id": "run-2",
              "text": "Brands",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " tab on the dashboard."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Click "
            },
            {
              "id": "run-2",
              "text": "Generate Brand",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " and enter a title for the brand (e.g. \"Main Website\" or \"Mobile App\")."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Once generated, the Brand ID is displayed and can be copied for use in API requests."
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
          "text": "The Brand ID must be included in the header or request parameters when calling most APIs, see "
        },
        {
          "id": "run-2",
          "text": "request headers",
          "href": "/api-reference#headers"
        },
        {
          "id": "run-3",
          "text": "."
        }
      ]
    },
    {
      "id": "figure-4",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.42.35_PM-d4bafe9510e8a2b5e9acd58c94477ebe.png",
          "alt": "Generate Brand"
        },
        {
          "id": "image-2",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.43.51_PM-1ef8f61ab398323029e162f5cf2da911.png",
          "alt": "Generate Brand"
        }
      ],
      "caption": "Figure 4 · Generating a Brand ID"
    },
    {
      "id": "webhooks-config",
      "type": "heading",
      "level": 2,
      "anchor": "webhooks-config",
      "text": "5. Webhook Configuration"
    },
    {
      "id": "paragraph-9",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Webhooks enable real-time communication of transaction events from Paysecure to your server. Configure a URL to receive callback notifications for payment events, set individually per payment method or for all methods simultaneously."
        }
      ]
    },
    {
      "id": "figure-5",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.46.24_PM-839f8fc9e2bae27c695f611c0ae9df0f.png",
          "alt": "Webhook configuration"
        }
      ],
      "caption": "Figure 5 · Webhook configuration screen"
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
              "text": "Click the "
            },
            {
              "id": "run-2",
              "text": "New Webhook",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " button."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Give the webhook a descriptive "
            },
            {
              "id": "run-2",
              "text": "name",
              "bold": true
            },
            {
              "id": "run-3",
              "text": "; choose a specific "
            },
            {
              "id": "run-4",
              "text": "payment method",
              "bold": true
            },
            {
              "id": "run-5",
              "text": " or \"All\" for universal callbacks; enter the callback "
            },
            {
              "id": "run-6",
              "text": "URL",
              "bold": true
            },
            {
              "id": "run-7",
              "text": "; select "
            },
            {
              "id": "run-8",
              "text": "event triggers",
              "bold": true
            },
            {
              "id": "run-9",
              "text": " (depending on the payment method, not all events may be available)."
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
              "text": "Save",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " to store the webhook settings."
            }
          ]
        }
      ]
    },
    {
      "id": "figure-6",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.47.47_PM-9cb53ae6d80f8156a4eaad1e1e1c590b.png",
          "alt": "Event triggers"
        }
      ],
      "caption": "Figure 6 · New Webhook, event trigger selection"
    },
    {
      "id": "paragraph-10",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Available events:",
          "bold": true
        },
        {
          "id": "run-2",
          "text": "hold release",
          "code": true
        },
        {
          "id": "run-3",
          "text": ", "
        },
        {
          "id": "run-4",
          "text": "payment in progress",
          "code": true
        },
        {
          "id": "run-5",
          "text": ", "
        },
        {
          "id": "run-6",
          "text": "payment refund",
          "code": true
        },
        {
          "id": "run-7",
          "text": ", "
        },
        {
          "id": "run-8",
          "text": "purchase cancelled",
          "code": true
        },
        {
          "id": "run-9",
          "text": ", "
        },
        {
          "id": "run-10",
          "text": "purchase created",
          "code": true
        },
        {
          "id": "run-11",
          "text": ", "
        },
        {
          "id": "run-12",
          "text": "purchase expired",
          "code": true
        },
        {
          "id": "run-13",
          "text": ", "
        },
        {
          "id": "run-14",
          "text": "purchase failed",
          "code": true
        },
        {
          "id": "run-15",
          "text": ", "
        },
        {
          "id": "run-16",
          "text": "purchase hold",
          "code": true
        },
        {
          "id": "run-17",
          "text": ", "
        },
        {
          "id": "run-18",
          "text": "purchase overdue",
          "code": true
        },
        {
          "id": "run-19",
          "text": ", "
        },
        {
          "id": "run-20",
          "text": "purchase paid",
          "code": true
        },
        {
          "id": "run-21",
          "text": ", "
        },
        {
          "id": "run-22",
          "text": "refund in progress",
          "code": true
        },
        {
          "id": "run-23",
          "text": "."
        }
      ]
    },
    {
      "id": "warn-callout",
      "type": "callout",
      "kind": "warn",
      "content": [
        {
          "id": "run-1",
          "text": "Important:",
          "bold": true
        },
        {
          "id": "run-2",
          "text": " for purchase requests, success and failure callback URLs set directly in the request "
        },
        {
          "id": "run-3",
          "text": "override",
          "bold": true
        },
        {
          "id": "run-4",
          "text": " the ones configured in the dashboard. For payout events, callback URLs must be configured within the payout API itself and are not managed from the dashboard."
        }
      ]
    },
    {
      "id": "public-key",
      "type": "heading",
      "level": 2,
      "anchor": "public-key",
      "text": "6. Public Key"
    },
    {
      "id": "paragraph-11",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "The public key verifies the hash signature used to validate payload responses. It is displayed in the "
        },
        {
          "id": "run-2",
          "text": "Public Key",
          "bold": true
        },
        {
          "id": "run-3",
          "text": " section of the dashboard and is used in conjunction with the corresponding private key to validate that data received from Paysecure is untampered, see the "
        },
        {
          "id": "run-4",
          "text": "webhook verification guide",
          "href": "/webhooks#signing"
        },
        {
          "id": "run-5",
          "text": "."
        }
      ]
    },
    {
      "id": "figure-7",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.48.18_PM-1677348f2b61f6c1d9d3f1f66856a7e8.png",
          "alt": "Public Key"
        }
      ],
      "caption": "Figure 7 · Public Key section"
    },
    {
      "id": "settings",
      "type": "heading",
      "level": 2,
      "anchor": "settings",
      "text": "7. Settings"
    },
    {
      "id": "paragraph-12",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "The Settings module allows merchants to fine-tune parameters for specific payment methods."
        }
      ]
    },
    {
      "id": "transaction-expiry-settings",
      "type": "heading",
      "level": 3,
      "text": "Transaction Expiry Settings"
    },
    {
      "id": "list-3",
      "type": "list",
      "className": "list",
      "items": [
        {
          "id": "item-1",
          "content": [
            {
              "id": "run-1",
              "text": "Purpose:",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " set the expiry minutes for APMs (Alternative Payment Methods) that support an expiry configuration."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "How it works:",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " the "
            },
            {
              "id": "run-3",
              "text": "purchase.expireInMin",
              "code": true
            },
            {
              "id": "run-4",
              "text": " parameter can be passed in the API request; if provided, it takes precedence over the dashboard default."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Functionality:",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " defines the time window within which a customer must complete an Interac payment, if not completed, the transaction is automatically set to "
            },
            {
              "id": "run-3",
              "text": "EXPIRED",
              "code": true
            },
            {
              "id": "run-4",
              "text": "."
            }
          ]
        }
      ]
    },
    {
      "id": "figure-8",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-16_at_5.49.42_PM-87fe6616ec22e6efe90d92ca8d0f1f5e.png",
          "alt": "Settings module"
        }
      ],
      "caption": "Figure 8 · Settings, transaction expiry"
    },
    {
      "id": "considerations-and-best-practices",
      "type": "heading",
      "level": 3,
      "text": "Considerations and Best Practices"
    },
    {
      "id": "paragraph-13",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "A payment made after the expiry window might still succeed (e.g. if the customer's bank processes it later), leading to discrepancies. Set an appropriate expiry time, communicate the payment window clearly to customers, and reconcile inconsistencies between Paysecure's records and the customer's bank during settlement."
        }
      ]
    }
  ]
});
