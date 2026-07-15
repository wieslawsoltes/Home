---
order: 1
project: prodatagrid
name: Formula Engine
eyebrow: Spreadsheet calculation
status: Active
description: A calculation layer for parsed expressions, cell references, dependency tracking, functions, recalculation, and Excel-oriented interoperability.
statement: Give grid cells relationships, functions, and repeatable recalculation.
packages:
  - name: ProDataGrid.FormulaEngine
    note: Formula parser, evaluation runtime, dependency graph, and built-in functions.
  - name: ProDataGrid.FormulaEngine.Excel
    note: Excel-oriented syntax and compatibility helpers.
install: dotnet add package ProDataGrid.FormulaEngine
usageLanguage: csharp
usage: |-
  var workbook = new FormulaWorkbook();
  workbook.SetValue("A1", 40m);
  workbook.SetValue("A2", 2m);
  workbook.SetFormula("A3", "=SUM(A1:A2)");

  var total = workbook.GetValue("A3");
highlights:
  - Parsed formulas and functions
  - Cell and range references
  - Dependency-driven recalculation
  - Excel compatibility package
layers:
  - label: Parse
    detail: Formula text becomes a typed expression tree.
  - label: Resolve
    detail: Names, cells, ranges, and functions bind against a workbook context.
  - label: Calculate
    detail: Dependencies determine evaluation order and invalidation.
  - label: Present
    detail: Grid integrations expose values, errors, and formula editing.
sourcePath: src/ProDataGrid.FormulaEngine
related:
  - prodatagrid/data-grid
  - prodatagrid/charting
---

## A calculation layer for parsed expressions, cell references, dependency tracking, functions, recalculation, and Excel-oriented interoperability.
