import { createDashboardDocument } from '../schema.js';

export const dashGlobalSettingsDocument = createDashboardDocument({
  "slug": "dash-global-settings",
  "current": "Global Settings",
  "previous": {
    "href": "/dash-add-user",
    "label": "Add User"
  },
  "next": {
    "href": "/dash-rule-engine",
    "label": "Rule Engine"
  },
  "blocks": [
    {
      "id": "global-settings",
      "type": "heading",
      "level": 1,
      "text": "Global Settings"
    },
    {
      "id": "lead",
      "type": "paragraph",
      "className": "lead",
      "content": [
        {
          "id": "run-1",
          "text": "Account-wide configuration, global MID limits, admin settings, error code mapping and actions, cascading rules, BIN categories, throttling."
        }
      ]
    },
    {
      "id": "overview",
      "type": "heading",
      "level": 2,
      "anchor": "overview",
      "text": "Overview"
    },
    {
      "id": "paragraph",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Configure global options that affect all your accounts, including transaction limits, error handling, and cascading rules: Global MID Limits · Admin Settings · Error Code Mapping · Error Code Action · Cascading Rules · BIN Category · Throttling settings."
        }
      ]
    },
    {
      "id": "mid-limits",
      "type": "heading",
      "level": 2,
      "anchor": "mid-limits",
      "text": "1. Global MID Limits"
    },
    {
      "id": "paragraph-2",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Set overall transaction limits that apply across all MIDs for a customer, limits based on transaction counts and amounts on an hourly, daily, weekly, or monthly basis."
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
          "text": "If individual limits have been configured in the MID Settings module, those settings "
        },
        {
          "id": "run-2",
          "text": "override",
          "bold": true
        },
        {
          "id": "run-3",
          "text": " the global limits."
        }
      ]
    },
    {
      "id": "figure",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.18.14_PM-c917c6c218fd358db1c2e707488d5055.png",
          "alt": "Global MID limits"
        }
      ],
      "caption": "Figure 1 · Global MID limits"
    },
    {
      "id": "admin-settings",
      "type": "heading",
      "level": 2,
      "anchor": "admin-settings",
      "text": "2. Admin Settings"
    },
    {
      "id": "paragraph-3",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Configure key administrative parameters that govern transaction handling time:"
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
              "text": "Overdue transactions",
              "bold": true
            },
            {
              "id": "run-2",
              "text": ": the number of hours after which a transaction's status automatically changes to overdue."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Expired transactions",
              "bold": true
            },
            {
              "id": "run-2",
              "text": ": the number of days after which a transaction is considered expired."
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
          "text": "You can also view test card information with associated test CVC values for system validation."
        }
      ]
    },
    {
      "id": "figure-2",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.20.19_PM-f201541fe677a950ade75dc571f3d97d.png",
          "alt": "Admin settings"
        }
      ],
      "caption": "Figure 2 · Admin settings"
    },
    {
      "id": "error-mapping",
      "type": "heading",
      "level": 2,
      "anchor": "error-mapping",
      "text": "3. Error Code Mapping"
    },
    {
      "id": "paragraph-5",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Map error codes received from banks or payment processors to predefined error codes, or create custom error codes. A single error code can be associated with multiple processor error codes."
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
              "text": "Select the bank",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " the error originates from."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Choose an error code",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " from the dropdown, or create a new one if not available."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Map processor error codes",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " that correspond to the chosen error code."
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
              "text": "Map",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " to complete the configuration."
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
          "text": "To create a new error code: click "
        },
        {
          "id": "run-2",
          "text": "Add More",
          "bold": true
        },
        {
          "id": "run-3",
          "text": ", type the new error code, then "
        },
        {
          "id": "run-4",
          "text": "Save",
          "bold": true
        },
        {
          "id": "run-5",
          "text": " (or "
        },
        {
          "id": "run-6",
          "text": "Cancel",
          "bold": true
        },
        {
          "id": "run-7",
          "text": ")."
        }
      ]
    },
    {
      "id": "figure-3",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.21.05_PM-21e192ba99de6c2539ab1849f83102e7.png",
          "alt": "Error code mapping"
        }
      ],
      "caption": "Figure 3 · Error code mapping"
    },
    {
      "id": "error-action",
      "type": "heading",
      "level": 2,
      "anchor": "error-action",
      "text": "4. Error Code Action"
    },
    {
      "id": "paragraph-7",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Automate the handling of processor errors with predefined actions, when an error occurs, the system initiates the associated action."
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
              "text": "Select the error code",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " to define an action for."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Define the action",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " to execute when the error occurs."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Set the duration",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " the action stays active (minutes, hours, or days)."
            }
          ]
        },
        {
          "id": "item-4",
          "content": [
            {
              "id": "run-1",
              "text": "Compose a block message",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " shown when the action is triggered."
            }
          ]
        },
        {
          "id": "item-5",
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
              "text": " to apply."
            }
          ]
        }
      ]
    },
    {
      "id": "figure-4",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.21.40_PM-eedc5cba77daa5a54fc55e393ea9408c.png",
          "alt": "Error code action"
        }
      ],
      "caption": "Figure 4 · Error code actions"
    },
    {
      "id": "cascading",
      "type": "heading",
      "level": 2,
      "anchor": "cascading",
      "text": "5. Cascading Rules"
    },
    {
      "id": "paragraph-8",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Cascading rules improve transaction success rates by automatically rerouting failed transactions to alternative banks or processors. If a transaction fails due to specific error codes returned by a bank, the system forwards it to another bank that may successfully process it, improving overall approval rates."
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
              "text": "Select the bank from the dropdown menu."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Choose the specific processor error codes that should trigger a cascade for that bank."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Assign the next bank the transaction should be routed to if the selected errors occur."
            }
          ]
        }
      ]
    },
    {
      "id": "paragraph-9",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Cascading rules operate on a per-bank basis; each rule defines how to handle particular failure scenarios."
        }
      ]
    },
    {
      "id": "figure-5",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.23.08_PM-25ca4504fc877542f4dd5849cca9c719.png",
          "alt": "Cascading rules"
        }
      ],
      "caption": "Figure 5 · Configuring cascading rules"
    },
    {
      "id": "bin-category",
      "type": "heading",
      "level": 2,
      "anchor": "bin-category",
      "text": "6. BIN Category Management"
    },
    {
      "id": "paragraph-10",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Organise and manage BINs (Bank Identification Numbers) for routing, blocking, and categorisation."
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
              "text": "Add a new BIN category:",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " click "
            },
            {
              "id": "run-3",
              "text": "Add More Category",
              "bold": true
            },
            {
              "id": "run-4",
              "text": " and enter a name."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Add BINs to a category:",
              "bold": true
            },
            {
              "id": "run-2",
              "text": " select the category, enter the BIN number, click "
            },
            {
              "id": "run-3",
              "text": "Add",
              "bold": true
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
      "id": "paragraph-11",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "BIN categories are used for targeted transaction logic like BIN-based routing and restrictions."
        }
      ]
    },
    {
      "id": "figure-6",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.29.41_PM-a432723949335d4b205136ab5fba7dec.png",
          "alt": "BIN categories"
        }
      ],
      "caption": "Figure 6 · BIN category management"
    },
    {
      "id": "throttling",
      "type": "heading",
      "level": 2,
      "anchor": "throttling",
      "text": "7. Throttling Settings"
    },
    {
      "id": "paragraph-12",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Throttling settings allow merchants to set progressive transaction velocity on different BINs."
        }
      ]
    },
    {
      "id": "figure-7",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/Screenshot_2025-05-19_at_5.38.50_PM-39dc0ba69b5654973e732a615ee1070c.png",
          "alt": "Throttling settings"
        }
      ],
      "caption": "Figure 7 · Throttling settings"
    }
  ]
});
