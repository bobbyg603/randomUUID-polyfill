## randomUUID polyfill

ESM compatible polyfill for `crypto.randomUUID`.

### Usage

Install the package

```bash
npm i randomuuid-polyfill
```

Include in angular.json under `polyfills`.

```json
 "projects": {
    "main": {
      "architect": {
        "build": {
          "options": {
            "polyfills": [
              "zone.js",
              "randomuuid-polyfill"
            ],
          }
        }
      }
    }
 }
```