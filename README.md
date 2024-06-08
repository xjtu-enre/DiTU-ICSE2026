# ASE24 Public Data for DiTU

This repository contains tools, data, and scripts for our work **DiTU: Exploring Language Feature Usages in Real-World Codebases for JavaScript and TypeScript**. Reviewers can either validate experimental results or utilze these infrastructure to explore their own intrested language features.

## Repository Structure

```text
/
|- README.md
|- package.json             // For setup JavaScript environment
|- repo-list
|  |- 240221.csv            // Project repository list, as described in paper Section 3.2
|  |- 240221-summary.csv    // Experimental meta data (mostly query execution duration)
|  |- 240221-results.json   // Statistical metric analysis results, as described in paper Section 2.3
|- fixtures                 // Feature READMEs, GodelScript query scripts, post-process scripts
|  |- class                 // A feature group
|  |  |- fancy-member-name  // A feature under the 'Class' group, in-paper ID is CD-02
|  |  |  |- README.md       // Feature description, unit tests, metrics, tags (for multi-dementional categorization, not used in Paper)
|  |  |  |- index.js        // Post-process JavaScript script
|  |  |  |- use-all-class-members.gdl  // GodelScript query script, see below on how to interprete the naming pattern
|  |- ...
|- src
|  |- cli.js                // Toolchain command line interface
```

## ID Mapping Table

This table lists the mapping relation between in-paper feature ID and its corresponding fixture in this repository.

| In-paper ID & Description | Directory |
| --- | --- |
| **(VD-01)** Use keyword `var` | [fixtures/variable-declaration/use-keyword-var](./fixtures/variable-declaration/use-keyword-var/README.md) |
| **(VD-02)** Declare list of variables in one statement | [fixtures/variable-declaration/declaration-list](./fixtures/variable-declaration/declaration-list/README.md) |
| **(VD-03)** Use destructuring pattern | [fixtures/variable-declaration/destructuring-pattern](./fixtures/variable-declaration/destructuring-pattern/README.md) |
| **(VD-04)** Declare rest variable | [fixtures/variable-declaration/complex-rest](./fixtures/variable-declaration/complex-rest/README.md) |
| **(VD-05)** Use comma elision in array destructuring pattern | [fixtures/variable-declaration/comma-elision](./fixtures/variable-declaration/comma-elision/README.md) |
| **(FD-01)** Declare destructuring parameter | [fixtures/function/parameter-destructuring](./fixtures/function/parameter-destructuring/README.md) |
| **(FD-02)** Use special variable `arguments` | [fixtures/function/use-arguments-in-function-body](./fixtures/function/use-arguments-in-function-body/README.md) |
| **(FD-03)** Use special variable `this` | [fixtures/function/use-this-in-function-body](./fixtures/function/use-this-in-function-body/README.md) |
| **(CD-01)** Declare private member | [fixtures/class/private-member](./fixtures/class/private-member/README.md) |
| **(CD-02)** Use unusual member name | [fixtures/class/fancy-member-name](./fixtures/class/fancy-member-name/README.md) |
| **(CD-03)** Declare static initialization block | [fixtures/class/static-block](./fixtures/class/static-block/README.md) |
| **(MS-01)** Use ESM module system instead of CJS | [fixtures/module-system/esm-cjs-syntax](./fixtures/module-system/esm-cjs-syntax/README.md) |
| **(MS-02)** Use new file extension | [fixtures/module-system/file-extension](./fixtures/module-system/file-extension/README.md) |
| **(MS-03)** Use dynamic `import()` function | [fixtures/module-system/import-function](./fixtures/module-system/import-function/README.md) |
| **(MS-04)** Export expression result | [fixtures/module-system/computational-export](./fixtures/module-system/computational-export/README.md) |
| **(MS-05)** Import then export symbols separately | [fixtures/module-system/import-then-export-over-reexport](./fixtures/module-system/import-then-export-over-reexport/README.md) |
| **(MS-06)** Use side-effect import | [fixtures/module-system/side-effect-import](./fixtures/module-system/side-effect-import/README.md) |
| **(MS-07)** Share export name for JS value entity and TS type entity | [fixtures/module-system/export-value-and-type-in-one-name](./fixtures/module-system/export-value-and-type-in-one-name/README.md) |
| **(MS-08)** Declare import meta attribute| [fixtures/module-system/import-attribute](./fixtures/module-system/import-attribute/README.md) |
| **(MS-09)** Conform to monorepo paradigm | [fixtures/module-system/monorepo](./fixtures/module-system/monorepo/README.md) |
| **(MS-10)** Declare subpath exports in package.json | [fixtures/module-system/subpath-exports](./fixtures/module-system/subpath-exports/README.md) |
| **(MS-11)** Declare subpath import in package.json | [fixtures/module-system/subpath-imports](./fixtures/module-system/subpath-imports/README.md) |
| **(OM-01)** Return new object in decorator | [fixtures/object-mechanism/decorator-return-new-function](./fixtures/object-mechanism/decorator-return-new-function/README.md) |
| **(OM-02)** Dynamic class inheritance | [fixtures/object-mechanism/dynamic-heritage](./fixtures/object-mechanism/dynamic-heritage/README.md) |
| **(OM-03)** Add property to first-class citizen | [fixtures/object-mechanism/first-class-citizen-modify-prop](./fixtures/object-mechanism/first-class-citizen-modify-prop/README.md) |
| **(OM-04)** Reassign to first-class citizen’s name | [fixtures/object-mechanism/reassign-to-declaration-name](./fixtures/object-mechanism/reassign-to-declaration-name/README.md) |
| **(OM-05)** Modify object’s prototype | [fixtures/object-mechanism/modify-prototype](./fixtures/object-mechanism/modify-prototype/README.md) |
| **(OM-06)** Override predefined methods by `Symbol` | [fixtures/object-mechanism/symbols](./fixtures/object-mechanism/symbols/README.md) |
| **(AS-01)** Create object with API call instead of literal | [fixtures/semantic/api-over-literal](./fixtures/semantic/api-over-literal/README.md) |
| **(AS-02)** Call `React.createElement()` manually instead of using JSX| [fixtures/framework/createelement-over-jsx](./fixtures/framework/createelement-over-jsx/README.md) |
| **(AS-03)** Declare React function component instead of class component | [fixtures/framework/react-component](./fixtures/framework/react-component/README.md) |
| **(TS-01)** Use class in type context | [fixtures/typescript/class-as-type](./fixtures/typescript/class-as-type/README.md) |
| **(TS-02)** Implement multiple interfaces in class declaration | [fixtures/typescript/class-multi-implements](./fixtures/typescript/class-multi-implements/README.md) |
| **(TS-03)** Declare both fields and parameters in class constructor | [fixtures/typescript/class-constructor-parameter-field](./fixtures/typescript/class-constructor-parameter-field/README.md) |
| **(TS-04)** Declare `this` parameter | [fixtures/typescript/parameter-this](./fixtures/typescript/parameter-this/README.md) |
| **(TS-05)** Declare interface with multiple inheritances | [fixtures/typescript/interface-multi-extends](./fixtures/typescript/interface-multi-extends/README.md) |
| **(TS-06)** Declare const enum | [fixtures/typescript/const-enum](./fixtures/typescript/const-enum/README.md) |
| **(TS-07)** Use unusual enum member name | [fixtures/typescript/enum-member-fancy-name](./fixtures/typescript/enum-member-fancy-name/README.md) |
| **(TS-08)** Override enum member initializer | [fixtures/typescript/enum-member-overridden-initializer](./fixtures/typescript/enum-member-overridden-initializer/README.md) |
| **(TS-09)** Declare overridden type parameters | [fixtures/typescript/overridden-type-parameter](./fixtures/typescript/overridden-type-parameter/README.md) |
| **(TS-10)** Use declaration merging | [fixtures/typescript/declaration-merging](./fixtures/typescript/declaration-merging/README.md) |
| **(TS-11)** Use identifier path as namespace name | [fixtures/typescript/namespace-identifier-path](./fixtures/typescript/namespace-identifier-path/README.md) |
| **(TS-12)** Decorate import/export expression with keyword `type` | [fixtures/typescript/type-import-export](./fixtures/typescript/type-import-export/README.md) |
| **(MI-01)** Use new compound assignment operators | [fixtures/misc/binary-operators](./fixtures/misc/binary-operators/README.md) |
| **(MI-02)** Use tag function in template literal | [fixtures/misc/tag-function](./fixtures/misc/tag-function/README.md) |
| **(MI-03)** Declare standalone block| [fixtures/misc/standalone-block](./fixtures/misc/standalone-block/README.md) |

There are also 4 features listed but not analyzed due to query tool did not support them:

| Feature Description | Directory | Unsupport Reason |
| --- | --- | --- |
| Use keyword `using` | [fixtures/variable-declaration/use-keyword-using](./fixtures/variable-declaration/use-keyword-using/README.md) | Parser version 4.5 < 5.2 |
| Declare class `accessor` member | [fixtures/class/accessor](./fixtures/class/accessor/README.md) | Parser version 4.5 < 4.9 |
| Use string alias in import/export alias | [module-system/string-alias](./fixtures/module-system/string-alias/README.md) | Not supported by TypeScript (A [known issue](https://github.com/microsoft/TypeScript/issues/40594)) |
| Declare `const` enum | [typescript/const-enum](./fixtures/typescript/const-enum/README.md) | Parser version 4.5 < 5.0 |

## Result Interpretation

In the statistical result analysis result JSON [`240221-result.json`](./repo-list/240221-results.json):

> This JSON file contains too many lines, to ensure the best viewing experience, you are suggested to open it with an editor that support large-file collapse (like WebStorm).

* Each top-level entry represents a feature, e.g., `variable-declaration/comma-elision` at line 2 corresponds to the feature VD-05.
  > The entry key follows the `<Feature group key>/<Feature key>` pattern, where a `key` is the directory name that can be found in the above mapping table.

* In a top-level object, several properties alongwith their values are presented, the naming pattern is loosely coupled with the metric we designed (As descripted in paper Section 2.3).
  * Property whose name started with `all-` and the next adjacent property (the metric **Usage Times**) are used to calculate the metric **Usage Frequency**, e.g., the usage frequency of feature VD-05 can be calculated by `array-destructuring-with-elision/sum (L5269)` / `all-array-destructuring-variable-declarations(L2635)`.
  * Property whose name started with `feature-usage-` is the metric **Usage Frequency** (So the above caluculation process was already performed).
    > Note that some features did not possess their corresponding usage frequency metric, this is because it was difficult for them to assign a proper denominator (property `all-`) to perform the division, e.g., TS-10 declaration merging allows variaous entity types to participant in and it is not practical to sum them all.
  * Property whose name started with `max-count-of-` is the metric **Max Count**, and the concrete meaning should be self-explanatory enough through the property name.
  * Property whose name started with `type(s)-` is the metric **Usage Context Type** or **Syntax Node Type** based on its concrete meaning.

In the paper, we mainly utilized the property `feature-usage-` to visualize various feature usage trends, and in text we also selectively chose some metrics to demonstrate the fine detail of features.

## Feature README Structure

Every feature README consists of 3 parts.

### Patterns (Not refers to usage pattern in the paper)

This section lists (almost) all available code that matches this feature based on the language spec, and serves as unit test and demonstration while implementing the query script.

### Metrics

Metrics designed for this feature.

#### #Usage, #Usage(feature)%(denominator1, denominator2, ...)

This metric produces a count number of the feature and several percentages where each percentage is against a certain denominator.

#### Type{type1, type2, ...}

This metric produces one of values that defined within the bracket, can be seen as an enumerator. (Each option should be explained.)

#### MaxCount(description)

This metrics produces the max count number of the feature in a given context, for example, the max depth, the max usage count under a class, etc.

#### Decorators

Metrics can be appended with decorators to indicate additional information.

* `@LLMPowered`, it means that this metric requires interaction with the LLM.
* `@intent?`, it means that this metric requires further investigation to determine the reason to use this feature.

### Tags

Tags provide extra prospect for categorize faetures.

| Tag | Description |
| --- | --- |
| **Feature Release Date** | |
| `stage-3`1 | The feature is in stage-3 of the TC39 proposal process. |
| `new`1 | The feature is (relative) new in the language (unlike a `stage-3` feature, `new` feature is officially release). |
| **Analysis Types** | |
| `static` | The feature is static determinable and related to JavaScript value scope. |
| `dynamic` | The feature requires analysis to narrow its dynamic behavior. |
| `typing` | The feature is static determinable and related to TypeScript type system. |
| **Feature Behaviors** | |               
| `implicit` | The feature has implicit behavior. (E.g. implicit function call, etc.) |
| `semantic` | The feature is a high-level semantic feature, and may require semantic analysis to resolve. |

1. Can append `(ES2022)` or `(TS5.0)` or both with comma separation to indicate the language version that introduces this feature.

## Getting Started

We provide multiple checkpoints that support both starting from scratch and final result validation.

> This section will be updated on Jun 10.

```text
Commands:
  stat [options]                               Print fixture statistics and extract test cases
  gather                                       Gather all Godel scripts to 'lib' dir and inject custom Godel lib file to Sparrow and rebuild it
  fetch-repo [options] <dir>                   Clone repos from GitHub using the pre-specified repo list csv file
  create-db [options] <repo-dir> <db-dir>      Create Sparrow DB for each repo in the given dir
  check [options] <repo-dir> <db-dir>          Check the data integrity of repos and dbs
  calc-loc [options] <repo-dir> <db-dir>       Calculate LoC of each repo in the given dir and save to its db directory
  get-repo-meta [options] <repo-dir> <db-dir>  Retrieve meta data of repo that has successfully created db by invoking standalone JS script
  run-godel [options] <db-dir>                 Run Godel scripts on each db in the given dir
                                               This command requires 'gather' command to be manually executed first
  post-process [options] <db-dir>              Invoke post process JS scripts to process Godel's output and generate final metric results
  analyze <db-dir>                             Invoke analyze functions of each feature on full db results to generate final metric results
  trace [options] <db-dir> <feature> <metric>  Trace the raw data source of a specific metric
                                               Requires '../repo-list/xxx-results.json' to exist
  summary [options] <db-dir>                   Collect all log data and generate a summary report
                                               Requires '../lib' holds all godel scripts
```
