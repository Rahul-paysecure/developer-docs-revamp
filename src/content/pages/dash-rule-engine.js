import { createDashboardDocument } from '../schema.js';

export const dashRuleEngineDocument = createDashboardDocument({
  "slug": "dash-rule-engine",
  "current": "Rule Engine",
  "previous": {
    "href": "/dash-global-settings",
    "label": "Global Settings"
  },
  "next": {
    "href": "/dash-global-blocking",
    "label": "Global Blocking"
  },
  "blocks": [
    {
      "id": "rule-engine",
      "type": "heading",
      "level": 1,
      "text": "Rule Engine"
    },
    {
      "id": "lead",
      "type": "paragraph",
      "className": "lead",
      "content": [
        {
          "id": "run-1",
          "text": "Rule categories, priorities, and dynamic rule-based transaction routing to Banks/MIDs, with error-driven cascading."
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
          "text": "The Rule Engine enables users to create and manage rule categories, set priorities, and define transaction routing logic. It allows dynamic rule-based transaction routing to specific Banks/MIDs based on predefined conditions, supports priority-based rule execution and error-driven cascading, and lets users modify, activate, or deactivate rules, optimising transaction success rates."
        }
      ]
    },
    {
      "id": "access",
      "type": "heading",
      "level": 2,
      "anchor": "access",
      "text": "Accessing the Rule Engine"
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
              "text": "Log in to the dashboard at "
            },
            {
              "id": "run-2",
              "text": "app.paysecure.net/login",
              "code": true
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
              "text": "On the left-hand panel, navigate to "
            },
            {
              "id": "run-2",
              "text": "Rule Engine",
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
      "id": "figure",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/reimage-1d6bffbbc16156aeaa9671abf2dc8d95.png",
          "alt": "Rule Engine"
        }
      ],
      "caption": "Figure 1 · Rule Engine in the dashboard"
    },
    {
      "id": "filters",
      "type": "heading",
      "level": 2,
      "anchor": "filters",
      "text": "Configuring Transaction Filters"
    },
    {
      "id": "paragraph-2",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Select any bank and apply criteria such as: minimum number of social site registrations (email-based verification), allowed social sites, whitelist checks, minimum/maximum transaction amounts, and merchant permissions. These filters define how the rule engine processes transactions."
        }
      ]
    },
    {
      "id": "figure-2",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/reimage%201-f4bac24cfa3533ebdff483ddd9e4acff.png",
          "alt": "Transaction filters"
        }
      ],
      "caption": "Figure 2 · Transaction filters"
    },
    {
      "id": "categories",
      "type": "heading",
      "level": 2,
      "anchor": "categories",
      "text": "Managing Rule Categories"
    },
    {
      "id": "creating-a-rule-category",
      "type": "heading",
      "level": 3,
      "text": "Creating a Rule Category"
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
              "text": "Rule Category",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " to create or review category priorities."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Click the "
            },
            {
              "id": "run-2",
              "text": "Add",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " icon (top-right corner)."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Enter the category name (without spaces) and the rule category type, which associates the category with a specific cause."
            }
          ]
        }
      ]
    },
    {
      "id": "figure-3",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/reimage%202-fba1c1d2ec8da7dbd4958d239fda2c09.png",
          "alt": "Rule category creation"
        },
        {
          "id": "image-2",
          "src": "/assets/images/reimage%203-9a12fc5ae793c5b167c1933bef5b878a.png",
          "alt": "Rule category creation"
        }
      ],
      "caption": "Figure 3 · Creating a rule category"
    },
    {
      "id": "setting-priorities",
      "type": "heading",
      "level": 3,
      "text": "Setting Priorities"
    },
    {
      "id": "paragraph-3",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Use the priority buttons (red and green) to adjust the priority of a rule category."
        }
      ]
    },
    {
      "id": "figure-4",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/reimage%204-c5ce6924802e20de688c5080261b434d.png",
          "alt": "Priorities"
        }
      ],
      "caption": "Figure 4 · Rule category priorities"
    },
    {
      "id": "routing",
      "type": "heading",
      "level": 2,
      "anchor": "routing",
      "text": "Configuring Rule-Based Routing"
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
              "text": "Navigate to "
            },
            {
              "id": "run-2",
              "text": "Rule-Based Routing",
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
              "text": "Use the search bar or select a rule category from the "
            },
            {
              "id": "run-2",
              "text": "Display by Rule Category",
              "bold": true
            },
            {
              "id": "run-3",
              "text": " dropdown."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "The list shows all rules within the selected category."
            }
          ]
        }
      ]
    },
    {
      "id": "figure-5",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/reimage%205-6296b91647310b57493e8e30655fa06a.png",
          "alt": "Rule-based routing"
        }
      ],
      "caption": "Figure 5 · Rule-based routing list"
    },
    {
      "id": "rule-details",
      "type": "heading",
      "level": 2,
      "anchor": "rule-details",
      "text": "Rule Details and Actions"
    },
    {
      "id": "paragraph-4",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Each rule includes: "
        },
        {
          "id": "run-2",
          "text": "rule priority",
          "bold": true
        },
        {
          "id": "run-3",
          "text": " (within the category), "
        },
        {
          "id": "run-4",
          "text": "rule name",
          "bold": true
        },
        {
          "id": "run-5",
          "text": " (editable via the edit icon), and action buttons to edit or delete the rule, modify descriptors, rule categories and rule tags, activate or deactivate rules, adjust priority, and create a new rule via the plus icon."
        }
      ]
    },
    {
      "id": "conditions",
      "type": "heading",
      "level": 2,
      "anchor": "conditions",
      "text": "Defining Rule Conditions"
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
              "text": "Click the rule name to view details."
            }
          ]
        },
        {
          "id": "item-2",
          "content": [
            {
              "id": "run-1",
              "text": "Under "
            },
            {
              "id": "run-2",
              "text": "Conditions",
              "bold": true
            },
            {
              "id": "run-3",
              "text": ", specify the transaction conditions that trigger rule actions."
            }
          ]
        },
        {
          "id": "item-3",
          "content": [
            {
              "id": "run-1",
              "text": "Click the add icon (top right) to define new conditions."
            }
          ]
        },
        {
          "id": "item-4",
          "content": [
            {
              "id": "run-1",
              "text": "Optionally, copy conditions from an existing rule via the top-right dropdown and "
            },
            {
              "id": "run-2",
              "text": "Copy Rules",
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
      "id": "actions",
      "type": "heading",
      "level": 2,
      "anchor": "actions",
      "text": "Setting Rule Actions"
    },
    {
      "id": "paragraph-5",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "Based on the defined conditions, configure the rule's action: "
        },
        {
          "id": "run-2",
          "text": "reject",
          "bold": true
        },
        {
          "id": "run-3",
          "text": " the transaction, or "
        },
        {
          "id": "run-4",
          "text": "route",
          "bold": true
        },
        {
          "id": "run-5",
          "text": " it to a specific Bank/MID, select the Bank/MID from the list and define the "
        },
        {
          "id": "run-6",
          "text": "weightage",
          "bold": true
        },
        {
          "id": "run-7",
          "text": " to determine traffic distribution."
        }
      ]
    },
    {
      "id": "figure-6",
      "type": "image",
      "images": [
        {
          "id": "image-1",
          "src": "/assets/images/reimage%206-8160b128a0ec3ddeb9d4074409f4dc8d.png",
          "alt": "Rule actions"
        },
        {
          "id": "image-2",
          "src": "/assets/images/reimage%207-a72fced52dc7381a924ade8f5665e52d.png",
          "alt": "Rule actions"
        },
        {
          "id": "image-3",
          "src": "/assets/images/reimage%208-11279c539cbe23a7e143cdf8e78620c1.png",
          "alt": "Rule actions"
        }
      ],
      "caption": "Figure 6 · Rule conditions and actions"
    },
    {
      "id": "cascading",
      "type": "heading",
      "level": 2,
      "anchor": "cascading",
      "text": "Cascading Logic"
    },
    {
      "id": "paragraph-6",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "If a transaction fails, it can be rerouted based on error type. Cascading applies only from "
        },
        {
          "id": "run-2",
          "text": "2D to 2D",
          "bold": true
        },
        {
          "id": "run-3",
          "text": " and "
        },
        {
          "id": "run-4",
          "text": "2D to 3D",
          "bold": true
        },
        {
          "id": "run-5",
          "text": " MIDs, not from 3D to 2D/3D MIDs."
        }
      ]
    },
    {
      "id": "mids",
      "type": "heading",
      "level": 2,
      "anchor": "mids",
      "text": "Managing Banks/MIDs"
    },
    {
      "id": "paragraph-7",
      "type": "paragraph",
      "content": [
        {
          "id": "run-1",
          "text": "The Bank/MID list displays all active Banks/MIDs. Select "
        },
        {
          "id": "run-2",
          "text": "All MIDs",
          "bold": true
        },
        {
          "id": "run-3",
          "text": ", "
        },
        {
          "id": "run-4",
          "text": "New MID",
          "bold": true
        },
        {
          "id": "run-5",
          "text": " (add manually), or "
        },
        {
          "id": "run-6",
          "text": "selected MIDs",
          "bold": true
        },
        {
          "id": "run-7",
          "text": " with weightage-based routing, transactions are directed to MIDs with higher weightage, optimising approval rates."
        }
      ]
    }
  ]
});
