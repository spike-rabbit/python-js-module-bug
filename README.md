# Steps to reproduce

1. `poetry install`
2. `poetry run python python-that-imports-js.py`

Error:
```
[JSE] ReferenceError: require is not defined in ES module scope, you can use import instead

[JSE] This file is being treated as an ES module because it has a '.js' file extension and '/home/z003dz7j/projects/python-js-module/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

[JSE]     at file:///home/z003dz7j/projects/python-js-module/.venv/lib/python3.13/site-packages/javascript/js/bridge.js:9:14

[JSE]     at ModuleJob.run (node:internal/modules/esm/module_job:218:25)

[JSE]     at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)

[JSE]     at async loadESM (node:internal/process/esm_loader:28:7)

[JSE]     at async handleMainPromise (node:internal/modules/run_main:113:12)
```