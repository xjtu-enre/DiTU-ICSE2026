# Public Data for DiTU

This repository contains tools, data, and scripts for our work **Evolving Trends, Patterns, and Hidden Pitfalls: Unveiling JavaScript Feature Usage in the Wild**. Reviewers can either validate experimental results or utilize the infrastructure to explore their own interested language features.

## Repository Structure

```text
/
|- README.md
|- package.json             // For setup JavaScript environment
|- repo-list
|  |- 240221.csv            // Project repository list
|  |- 240221-summary.csv    // Experimental meta data (mostly query execution duration)
|  |- 240221-results-s.json // Heuristic metric statistical analysis results
|- fixtures                 // Feature READMEs, GodelScript query scripts, and post-process scripts
|  |- class                 // A feature group
|  |  |- fancy-member-name  // A feature under the 'Class' group
|  |  |  |- README.md       // Feature description, unit tests, metrics, tags (new, corner, etc.)
|  |  |  |- index.js        // JavaScript Post-process script
|  |  |  |- use-all-class-members.gdl  // GodelScript query script, see below on how to interprete the naming pattern
|  |- ...
|- excerpts                 // A small excerpt of 4 commits of raw query results
|  |- AgentGPT@8...         // A commit directory
|  |  |- coref_javascript_src.db       // A CodeFuse-Query database, you can open it with any SQLite viewer
|- src
|  |- cli.js                // Toolchain command line interface
```

## Fixture Description

### Mapping Table

This table lists the mapping relation between in-paper feature ID and its corresponding fixture in this repository.

| ID | Directory |
| --- | --- |
| LG-1A | [fixtures/misc/tag-function](./fixtures/misc/tag-function/README.md) |
| LG-2A | [fixtures/misc/standalone-block](./fixtures/misc/standalone-block/README.md) |
| SD-1A | [fixtures/variable-declaration/destructuring-pattern](./fixtures/variable-declaration/destructuring-pattern/README.md) |
| | [fixtures/variable-declaration/complex-rest](./fixtures/variable-declaration/complex-rest/README.md) |
| SD-2AB | [fixtures/variable-declaration/comma-elision](./fixtures/variable-declaration/comma-elision/README.md) |
| FC-1A | [fixtures/function/parameter-destructuring](./fixtures/function/parameter-destructuring/README.md) |
| FC-1B | [fixtures/function/use-arguments-in-function-body](./fixtures/function/use-arguments-in-function-body/README.md) |
| FC-2AB | [fixtures/class/fancy-member-name](./fixtures/class/fancy-member-name/README.md) |
| SM-1AB | [fixtures/module-system/import-then-export-over-reexport](./fixtures/module-system/import-then-export-over-reexport/README.md) |
| SM-2A | [fixtures/module-system/import-attribute](./fixtures/module-system/import-attribute/README.md) |
| OA-1AB | [fixtures/semantic/api-over-literal](./fixtures/semantic/api-over-literal/README.md) |
| OA-2AB | [fixtures/framework/react-component](./fixtures/framework/react-component/README.md) |
| TS-1AB | [fixtures/typescript/class-constructor-parameter-field](./fixtures/typescript/class-constructor-parameter-field/README.md) |
| TS-2AB | [fixtures/typescript/declaration-merging](./fixtures/typescript/declaration-merging/README.md) |

<details>
<summary>We actually queried all 44 individual features!</summary>

To collect feature alternatives, we first collect 44 individual features, and then filtered out features with no alternatives. Following features were filtered out, but we still provide their corresponding fixture directories for reference.

| Description | Directory |
| --- | --- |
| Use keyword `var` | [fixtures/variable-declaration/use-keyword-var](./fixtures/variable-declaration/use-keyword-var/README.md) |
| Declare list of variables in one statement | [fixtures/variable-declaration/declaration-list](./fixtures/variable-declaration/declaration-list/README.md) |
| Use destructuring pattern | [fixtures/variable-declaration/destructuring-pattern](./fixtures/variable-declaration/destructuring-pattern/README.md) |
| Declare rest variable | [fixtures/variable-declaration/complex-rest](./fixtures/variable-declaration/complex-rest/README.md) |
| Use comma elision in array destructuring pattern | [fixtures/variable-declaration/comma-elision](./fixtures/variable-declaration/comma-elision/README.md) |
| Declare destructuring parameter | [fixtures/function/parameter-destructuring](./fixtures/function/parameter-destructuring/README.md) |
| Use special variable `arguments` | [fixtures/function/use-arguments-in-function-body](./fixtures/function/use-arguments-in-function-body/README.md) |
| Use special variable `this` | [fixtures/function/use-this-in-function-body](./fixtures/function/use-this-in-function-body/README.md) |
| Declare private member | [fixtures/class/private-member](./fixtures/class/private-member/README.md) |
| Use unusual member name | [fixtures/class/fancy-member-name](./fixtures/class/fancy-member-name/README.md) |
| Declare static initialization block | [fixtures/class/static-block](./fixtures/class/static-block/README.md) |
| Use ESM module system instead of CJS | [fixtures/module-system/esm-cjs-syntax](./fixtures/module-system/esm-cjs-syntax/README.md) |
| Use new file extension | [fixtures/module-system/file-extension](./fixtures/module-system/file-extension/README.md) |
| Use dynamic `import()` function | [fixtures/module-system/import-function](./fixtures/module-system/import-function/README.md) |
| Export expression result | [fixtures/module-system/computational-export](./fixtures/module-system/computational-export/README.md) |
| Import then export symbols separately | [fixtures/module-system/import-then-export-over-reexport](./fixtures/module-system/import-then-export-over-reexport/README.md) |
| Use side-effect import | [fixtures/module-system/side-effect-import](./fixtures/module-system/side-effect-import/README.md) |
| Share export name for JS value entity and TS type entity | [fixtures/module-system/export-value-and-type-in-one-name](./fixtures/module-system/export-value-and-type-in-one-name/README.md) |
| Declare import meta attribute| [fixtures/module-system/import-attribute](./fixtures/module-system/import-attribute/README.md) |
| Conform to monorepo paradigm | [fixtures/module-system/monorepo](./fixtures/module-system/monorepo/README.md) |
| Declare subpath exports in package.json | [fixtures/module-system/subpath-exports](./fixtures/module-system/subpath-exports/README.md) |
| Declare subpath import in package.json | [fixtures/module-system/subpath-imports](./fixtures/module-system/subpath-imports/README.md) |
| Add property to first-class citizen | [fixtures/object-mechanism/first-class-citizen-modify-prop](./fixtures/object-mechanism/first-class-citizen-modify-prop/README.md) |
| Reassign to first-class citizen’s name | [fixtures/object-mechanism/reassign-to-declaration-name](./fixtures/object-mechanism/reassign-to-declaration-name/README.md) |
| Modify object’s prototype | [fixtures/object-mechanism/modify-prototype](./fixtures/object-mechanism/modify-prototype/README.md) |
| Override predefined methods by `Symbol` | [fixtures/object-mechanism/symbols](./fixtures/object-mechanism/symbols/README.md) |
| Create object with API call instead of literal | [fixtures/semantic/api-over-literal](./fixtures/semantic/api-over-literal/README.md) |
| Call `React.createElement()` manually instead of using JSX| [fixtures/framework/createelement-over-jsx](./fixtures/framework/createelement-over-jsx/README.md) |
| Declare React function component instead of class component | [fixtures/framework/react-component](./fixtures/framework/react-component/README.md) |
| Use class in type context | [fixtures/typescript/class-as-type](./fixtures/typescript/class-as-type/README.md) |
| Implement multiple interfaces in class declaration | [fixtures/typescript/class-multi-implements](./fixtures/typescript/class-multi-implements/README.md) |
| Declare both fields and parameters in class constructor | [fixtures/typescript/class-constructor-parameter-field](./fixtures/typescript/class-constructor-parameter-field/README.md) |
| Declare `this` parameter | [fixtures/typescript/parameter-this](./fixtures/typescript/parameter-this/README.md) |
| Declare interface with multiple inheritances | [fixtures/typescript/interface-multi-extends](./fixtures/typescript/interface-multi-extends/README.md) |
| Declare const enum | [fixtures/typescript/const-enum](./fixtures/typescript/const-enum/README.md) |
| Use unusual enum member name | [fixtures/typescript/enum-member-fancy-name](./fixtures/typescript/enum-member-fancy-name/README.md) |
| Override enum member initializer | [fixtures/typescript/enum-member-overridden-initializer](./fixtures/typescript/enum-member-overridden-initializer/README.md) |
| Declare overridden type parameters | [fixtures/typescript/overridden-type-parameter](./fixtures/typescript/overridden-type-parameter/README.md) |
| Use declaration merging | [fixtures/typescript/declaration-merging](./fixtures/typescript/declaration-merging/README.md) |
| Use identifier path as namespace name | [fixtures/typescript/namespace-identifier-path](./fixtures/typescript/namespace-identifier-path/README.md) |
| Decorate import/export expression with keyword `type` | [fixtures/typescript/type-import-export](./fixtures/typescript/type-import-export/README.md) |
| Use new compound assignment operators | [fixtures/misc/binary-operators](./fixtures/misc/binary-operators/README.md) |
| Use tag function in template literal | [fixtures/misc/tag-function](./fixtures/misc/tag-function/README.md) |
| Declare standalone block| [fixtures/misc/standalone-block](./fixtures/misc/standalone-block/README.md) |

There are also 4 features listed but not analyzed due to query engine did not support them:

| Feature Description | Directory | Reason |
| --- | --- | --- |
| Use keyword `using` | [fixtures/variable-declaration/use-keyword-using](./fixtures/variable-declaration/use-keyword-using/README.md) | Parser version 4.5 < 5.2 |
| Declare class `accessor` member | [fixtures/class/accessor](./fixtures/class/accessor/README.md) | Parser version 4.5 < 4.9 |
| Use string alias in import/export alias | [module-system/string-alias](./fixtures/module-system/string-alias/README.md) | Not supported by TypeScript (A [known issue](https://github.com/microsoft/TypeScript/issues/40594)) |
| Declare `const` enum | [typescript/const-enum](./fixtures/typescript/const-enum/README.md) | Parser version 4.5 < 5.0 |

</details>

### Feature README Structure

Every feature README consists of 3 parts.

#### Patterns (Not the same as 'usage pattern' as described in Section 3.2)

This section lists (almost) all available code snippets that match this feature based on the language spec, and serves as unit test (Section 4.2) and demonstration while implementing the query script.

#### Implementation Metrics (Facilitate 'metrics' as described in Section 3.2)

Metrics designed for this feature.

##### #Usage, #Usage(feature)%(denominator1, denominator2, ...)

This metric produces a count number of the feature and several percentages where each percentage is against a certain denominator.

##### Type{type1, type2, ...}

This metric produces one of values that defined within the bracket, can be seen as an enumerator. (Each option should be explained.)

##### MaxCount(description)

This metrics produces the max count number of the feature in a given context, for example, the max depth, the max usage count under a class, etc.

##### Decorators

Metrics can be appended with decorators to indicate additional information.

* `@LLMPowered`, it means that this metric requires interaction with the LLM.
* `@intent?`, it means that this metric requires further investigation to determine the reason to use this feature.

#### Tags

Tags provide extra prospect for categorize features.

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

### GodelScript Query Script Naming Pattern

> The mapping relation between query script and language feature is not strictly one-to-one, that is, some scripts may be reused by multiple features, and some features may depend on multiple scripts.

| Naming Prefix | Description |
| --- | --- |
| `get-` + *name* | A functional query script. The query result JSON will also be named with the *name*. |
| `use-` + *name* | A placeholder indicating this feature just borrowed a query script named `get-*name*.gdl` from another feature. |
| `ignore-` + *reason* | A placeholder indicating this feature is ignored due to the *reason*. |

## Result Interpretation

In the statistical analysis result JSON [`240221-result-s.json`](./repo-list/240221-results-s.json):

> [!WARNING]
> This JSON file contains too many lines, to ensure the best viewing experience, you are suggested to open it with an editor that support large-file collapse (like WebStorm).

* Each top-level entry represents a feature, e.g., `variable-declaration/comma-elision` in line 2 corresponds to the feature VD-05.
  > The entry key follows the `<Feature group key>/<Feature key>` pattern, where a `key` is the directory name that can be found in the above mapping table.

* In a top-level object, several properties along with their values are presented, the naming pattern is loosely coupled with the metric we designed (As described in in-paper Section 2.3.3).
  * Property whose name started with `all-` and the next adjacent property (the metric **Usage Count**) are used to calculate the metric **Usage Frequency**.
  * Property whose name started with `feature-usage-` is the metric **Usage Frequency** (So the above caluculation process was already performed).
    > Note that some features did not possess their corresponding usage frequency metric, this is because it was difficult for them to assign a proper denominator (property `all-`) to perform the division, e.g., TS-10 declaration merging allows various entity types to participant in and it is not practical to sum them all.
  * Property whose name started with `max-count-of-` is the metric **Max Count**, and the concrete meaning should be self-explanatory enough through the property name.
  * Property whose name started with `type(s)-` is the metric **Usage Context Type** or **Syntax Node Kind** based on its concrete meaning.

In the paper, we mainly utilized the property `feature-usage-` to visualize various feature usage trends, and in text we also selectively chose some metrics to demonstrate the fine detail of features.


## Getting Started

This section will guide you to replicate our experiment and analysis from cloning repository to final analysis and code review by statistic trace back. We provide multiple checkpoints in this whole process so that you can either start from scratch or use our pre-uploaded data.

> [!CAUTION]
> This experiment is extremely space-consuming, as visualized in Figure 4b. The code query technique storage for ~3k repositories takes ~180GB disk space. If you want to fully replicate our experiment results, you should prepare **an SSD with at least 256GB empty space**.

Almost all steps rely on the centric command line interface [`src/cli.js`](./src/cli.js), and you should have `Node.js` available in your system and install dependency packages by running `npm i` at the root directory of this repo. All available commands of `cli.js` are listed below, and some of them will be used in the following step-by-step tutorials.

```text
Commands:
  stat [options]                               Print fixture statistics and extract test cases
  gather                                       Gather all Godel scripts to 'lib' dir and inject
                                               custom Godel lib file to Sparrow and rebuild it
  fetch-repo [options] <dir>                   Clone repos from GitHub using the pre-specified repo
                                               list csv file
  create-db [options] <repo-dir> <db-dir>      Create Sparrow DB for each repo in the given dir
  check [options] <repo-dir> <db-dir>          Check the data integrity of repos and dbs
  calc-loc [options] <repo-dir> <db-dir>       Calculate LoC of each repo in the given dir and save
                                               to its db directory
  get-repo-meta [options] <repo-dir> <db-dir>  Retrieve meta data of repo that has successfully
                                               created db by invoking standalone JS script
  run-godel [options] <db-dir>                 Run Godel scripts on each db in the given dir
                                               This command requires 'gather' command to be
                                               manually executed first
  post-process [options] <db-dir>              Invoke post process JS scripts to process Godel's
                                               output and generate metric results
  analyze [options] <db-dir>                   Invoke analyze functions of each feature on full db
                                               results to generate final metric results
  trace [options] <db-dir> <feature> <metric>  Trace the raw data source of a specific metric
                                               Requires '../repo-list/xxx-results.json' to exist
  summary [options] <db-dir>                   Collect all log data and generate a summary report
                                               Requires '../lib' holds all godel scripts
  sample [options] <db-dir>                    Sample the data at file level to generate a smaller
                                               data set for manual inspection
  sample-merge                                 Merge sample results
  help [command]                               display help for command
```

> [!IMPORTANT]
> To run `cli.js`, there are several requirements:
> 1. The command line **Current Working Directory (CWD)** should be at `./src`;
> 2. The command `sparrow` should be available in the environment variable `PATH` (See **Install CodeFuse-Query** section);
> 3. Git config `uploadpack.allowReachableSHA1InWant` is set to `true` ([Tutorial](https://stackoverflow.com/a/43136160/13878671)) for cloning only necessary and non-adjacent commits.

<details>
<summary>Install CodeFuse-Query</summary>

[**CodeFuse-Query**](https://github.com/codefuse-ai/CodeFuse-Query?tab=readme-ov-file) is a CodeQL-like data-centric static code analysis system developed by *Ant Group*. It was utilized in our study for parsing codebase to AST and storing them as a relational database, and it also provides a Datalog-like query language namely [**GodelScript**](https://github.com/codefuse-ai/CodeFuse-Query/blob/main/doc/4_godelscript_language.en.md).

To continue replicate our experiment process, you need to install CodeFuse-Query binary first. You can follow its [installation guide](https://github.com/codefuse-ai/CodeFuse-Query/blob/main/doc/3_install_and_run.en.md).

> [!NOTE]
> CodeFuse-Query works on Linux and macOS only. Though Windows is not supported, WSL can be used (Follow [this issue](https://github.com/codefuse-ai/CodeFuse-Query/issues/36#issuecomment-1975027164) to address a missing lib issue in WSL).

After successfully installed CodeFuse-Query, please also:
1. Add the installation directory to the environment variable `PATH`;
2. run `node cli.js gather` to let the script setup GodelScript library dependency automatically.

### CodeFuse-Query Cheat Sheet

To generate the Code-as-Data database for a local repository, run

```bash
sparrow database create --data-language-type=javascript -s /path/to/repo -o /path/to/storage
```

The generated database file `coref_javascript_src.db` is a standard SQLite database, and you can open it with any SQLite viewer, like [this VSCode extension](https://marketplace.visualstudio.com/items?itemName=yy0931.vscode-sqlite3-editor).

To execute a GodelScript query script on a specified database, run

```bash
sparrow query run --format json --database /path/to/db --gdl /path/to/script.gdl --output /path/to/output/dir
```

</details>

<details>
<summary>Clone Repository</summary>

To start from the beginning, you need to fetch a JavaScript/TypeScript repository to local. We had [a list of the most starred repositories](./repo-list/240221.csv), as described in the in-paper Section 3.2, attached with this repo. You can also use your own favorite repositories, but you are suggested to add them to the list so that you can also enjoy with the centric cli in the following steps.

To clone a repository that was already listed in the list, run

```bash
node cli.js fetch-repo /path/to/repo-dir [options]
```

to clone the latest commit of that repository (and optional several specific historical commits), where `/path/to/repo-dir` is the directory where you want to store cloned repositories.

Available options for this command are as follows:

```text
Clone repos from GitHub using the pre-specified repo list csv file

Arguments:
  dir                        The base dir where cloned repos are stored

Options:
  -s --start <start>         Start repo count (started from 1) (default: 1)
  -e --end <end>             End repo count (included)
  -d --depth <depth>         Git clone depth (default: 1)
  -c --commits <commits...>  Commit indices to checkout, available values are from 0 to 4
```

E.g.: the command

```bash
node cli.js fetch-repo /path/to/repo-dir -s 1 -e 2 -c 0 1 2 3 4
```

clones all five commits (present, 2023/7, 2023/1, 2022/7, 2022/1, as assigned by `-c 0 1 2 3 4`) of repositories `facebook/react` (the first repository in the list, as assigned by `-s 1`) and `vuejs/vue` (the second repository in the list, as assigned by `-e 2`). The `commit_` columns in the list are used to determine the concrete commit SHA.
</details>

<details>
<summary>Code-as-Data Storage</summary>

After repositories are cloned to local, the next step is to utilize CodeFuse-Query to generate corresponding dabase for each repository. Run

```bash
node cli.js create-db /path/to/repo-dir /path/to/db-dir [options]
```

to do so, where `/path/to/db-dir` is the directory where you want to store generated database files (and correlated query results in the following steps).

Available options for this command are as follows:

```text
Create Sparrow DB for each repo in the given dir

Arguments:
  repo-dir                   The base dir where cloned repos are stored
  db-dir                     The base dir where dbs are stored

Options:
  -s --start <start>         Start repo count (default: 1)
  -e --end <end>             End repo count
  -c --commits <commits...>  Commit indices to work on
```

> [!WARNING]
> This step could be time-consuming depending on the repository size and whether SSD or HDD are you using.
> 1. CodeFuse-Query has an 1 hour meltdown threshold hard-coded for database generation;
> 2. You are highly suggested to use an SSD to store code repositories and generated databases.
</details>

<details>
<summary>Feature Usage Instance Query</summary>

After databases are generated successfully, the next step is to execute GodelScript query scripts to extract language feature usage instances and save them in JSON files. To do so, run:

```bash
node cli.js run-godel /path/to/db-dir [options]
```

Available options for this command are as follows:

```text
Run Godel scripts on each db in the given dir
This command requires 'gather' command to be manually executed first

Arguments:
  db-dir                     The base dir where dbs are stored

Options:
  -s --start <start>         Start repo count (default: 1)
  -e --end <end>             End repo count
  -c --commits <commits...>  Commit indices to work on
  -t --timeout <timeout>     Timeout (in minute) for each Godel script
                             Set to 0 to disable timeout (default: 10)
  -o --override              Override existing godel results (default: false)
  -g --groups <group...>     Run only specified fixture groups (with all features in them)
                             Item ends with .gdl will be treated as a script (no 'get-' prefix)
```

E.g., the command

```bash
node cli.js run-godel /path/to/db-dir -s 1 -e 1 -c 0 -g typescript all-classes.gdl
```

executes

1. All GodelScript query scripts under the fixture group [`typescript`](./fixtures/typescript/);
2. A query script [`all-classes.gdl`](./fixtures/class/get-all-classes.gdl).

on the first commit of the first repository, corresponding result JSONs can be found under the directory `/path/to/db-dir/repo@commit`, where every JSON is the result of the query script with the same name.

> [!WARNING]
> This step could also be time-consuming depending on the database size and the complexity of the query script.
</details>

<details open>
<summary>Metric Calculation</summary>

> [!NOTE]
> You can download our pre-uploaded raw query JSON results at [https://doi.org/10.5281/zenodo.11544610](https://doi.org/10.5281/zenodo.11544610). It contains only query JSON results, whereas Code-as-Data databases were not included. If you want to replicate the process of query execution, you need to generate the database manually as described in previous steps. The download zip takes ~3GB, and **the unzipped files takes ~180GB**.

After all query JSON results are generated, the next step is to calculate various metrics, as described in the in-paper Section 2.3. To do so, run:

```bash
node cli.js post-process /path/to/db-dir [options]
```

Available options for this command are as follows:

```text
Invoke post process JS scripts to process Godel's output and generate final metric results

Arguments:
  db-dir                     The base dir where dbs are stored

Options:
  -s --start <start>         Start repo count (default: 1)
  -e --end <end>             End repo count
  -c --commits <commits...>  Commit indices to work on
  --no-merge                 Do not merge new results with existing results
                             (Old results will be lost)
  -g --groups <group...>     Run only specified fixture groups
                             Using "group/feature" to specify feature only
```

After executing this command, a `results.json` will be generated under corresponding database directory. The content is as follows, where each top-level entry represents a language feature (See [ID Mapping Table](#id-mapping-table) above), and correlated object holds all metric values of that feature (See [Metrics](#metrics) above).

```json
{
  "variable-declaration/comma-elision": {
    "all-array-destructuring-variable-declarations": 0,
    "array-destructuring-with-elision": 0,
    "feature-usage-against-variable-array-destructuring-usage": null,
    "max-count-of-comma-elisions-in-one-declaration": 0,
    "types": {
      "comma-elision": 0,
      "pseudo-elision": 0
    }
  },
  "...": "..."
}
```

> [!TIP]
> This step should be way more faster than CodeFuse-Query related steps, but it still takes ~5min to handle this large data scale.
</details>

<details open>
<summary>Statistical Analysis</summary>

> [!NOTE]
> You can find our pre-generated statistical analysis results at [`240221-results-s.json`](./repo-list/240221-results-s.json), but you need a better editor to open and view it since it contains too many lines, as described in [Result Interpretation](#result-interpretation) above.

After metrics are calculated for each database, the next step is add **time** as a new dimension for statistical analysis and the reveal of feature usage trends. To do so, run

```bash
node cli.js analyze /path/to/db-dir
```

, and the result `240221-results-s.json` will be generated under the directory `./repo-list`, which should be the same as what this repository contains if you exactly replicate our experiment.
</details>

<details open>
<summary>Metric Trace-back</summary>

Section 5.2 and 5.3 (Results to RQ2 and RQ3) exhibit feature usage intent and pattern analysis results, which were derived by this step. At this step, we trace back some certain metrics to the source code that produce corresponding metrics, and have experienced developers to sampling review them to summarize code intents and patterns. To do so, run

```bash
node cli.js trace /path/to/db-dir <feature> <metric> [options]
```

, this command will output several GitHub links like

```text
https://github.com/nolimits4web/swiper/blob/2351d15250b309e0aefdf4ed83b9fece79a07472/src/types/swiper-events.d.ts#L350
```

, which directly jump to the exact line in source code that results in the metric **The maximum count of declaration merging participants** to be 22 for the TypeScript feature **(TS-2A) Use declaration merging**.

Available options for this command are as follows:

```text
Trace the raw data source of a specific metric
Requires '../repo-list/xxx-results.json' to exist

Arguments:
  db-dir                   The base dir where dbs are stored
  feature                  The feature name
  metric                   The metric name

Options:
  -i --indices <index...>  The result index (of max source) to trace
  -f --full                Display full results inspect of its length
  -s --shuffle <seed>      Shuffle the trace results and output only 10 of them for case study
```

E.g., to produce the previously mentioned trace result, the command should be:

```bash
node cli.js trace /path/to/db-dir typescript/declaration-merging max-count-of-merging-elements -i 0
```

There are also some pattern summarizations have nothing to do with the max metric value, but require sampling code review. For example, the result JSON shows that there are developers using declaration merging on three different entity types (that is, `ClassDeclaration,InterfaceDeclaration,ModuleDeclaration` in result JSON line 205253), and we want to see the source code that results in this weird metric result, we could use the command

```bash
node cli.js trace /path/to/db-dir/ typescript/declaration-merging types/ClassDeclaration,InterfaceDeclaration,ModuleDeclaration -s 2024
```

which gives us a GitHub link

```text
https://github.com/pixijs/pixijs/blob/13a1ad357b61393c3f11d4de9b11d346b36e1946/packages/loaders/src/LoaderResource.ts#L98
```

This example drives us summarize the corresponding code smell pattern as listed in the 13th row of the in-paper Table 3.

Please note that we did't implement corresponding trace-back functionality for all metrics, refer to the below table to know which metrics do we support.

| Feature Key | Trace-able Metrics |
|---|---|
| class/fancy-member-name | types/fancy-string-literal<br>types/raw-numeric-literal |
| class/static-block | class-with-static-block |
| function/use-arguments-in-function-body | types/with-normal-param-decl<br>types/with-rest-param-decl |
| function/use-this-in-function-body | types/called-with-new<br>types/called-without-new |
| misc/standalone-block | types-decl/declaration-inside/case<br>types-decl/declaration-inside/non-case<br>types-decl/no-declaration/case<br>types-decl/no-declaration/non-case<br>max-count-of-nesting-depth |
| misc/tag-function | types/tagged<br>fancy-tagged-tag-types/* |
| module-system/export-value-and-type-in-one-name | types/exported |
| module-system/import-then-export-over-reexport | import-then-export |
| module-system/side-effect-import | types/EmptyBraceImport |
| object-mechanism/first-class-citizen-modify-prop | modified-functions<br>modified-classes |
| object-mechanism/reassign-to-declaration-name | modified-functions<br>modified-classes |
| typescript/class-constructor-parameter-field | types/mixed-field-and-parameter |
| typescript/declaration-merging | max-count-of-merging-elements<br>types/* |
| typescript/enum-member-fancy-name | feature-usage-confusing-name-against-string-literal-name |
| typescript/enum-member-overridden-initializer | types-initializer-index/PartialInit |
| typescript/namespace-identifier-path | max-count-of-identifier-path-length |
| typescript/overridden-type-parameter | type-parameters-in-overriding-usage |
| variable-declaration/comma-elision | max-count-of-comma-elisions-in-one-declaration |
| variable-declaration/declaration-list | max-count-of-list-length |

> Trace-able metrics like `fancy-tagged-tag-types/*` that ends with the wildcard symbol `*` means you can attach any valid type strings as long as it were presented in the result JSON. For example, for this metric, you can attach `PropertyAccessExpression`, `ObjectLiteralExpression`, and `CallExpression`, etc. as listed in the result JSON line 86066~86073.
</details>

## Questionnaire Survey

As described in Section 5.3 (RQ3), we conducted questionnaire survey on 30 experienced developers to assess three code smell patterns that are not covered by ESLint.

### Questionnaire Structure

#### Section I: Basic Information

##### I-1 [Single Choice]: Self-rating in to what extent are you familiar with JavaScript?

A. Normal

B. Relatively familiar

C. Familiar

D. Familiar, and also know language's new versions/feature proposals

##### I-2 [Single Choice]: Self-rating in to what extent are you familiar with TypeScript?

A. Not familiar

B. Normal

C. Relatively familiar

D. Familiar

E. Familiar, and also know language's new versions/feature proposals

##### I-3 [Multi Choice]: Select the most used language usage domains that apply to you.

A. Frontend development

B. Backend Node.js development

C. (Multi-end) Fundamental library development

D. Others

#### Section II: Feature Usage Rating

##### Part A: Destructuring pattern in variable declaration (Feature SD-1A)

###### II-A-1 [Single Choice]: Have you known and used ES6 variable destructuring pattern `let [a, b] = arr` and `let {a: b} = obj` before?

A. Known and used

B. Known but not used

C. Neither known nor used

###### II-A-2 [Multi Choice]: The symbol `...` can pack rest properties/elements into a rest variable, and which of the following options are correct regarding to re-destructure a rest variable?

A. `let [a, ...[b]] = arr`

B. `let [a, ...{b}] = arr`

C. `let {a, ...{b}} = obj`

D. `let {a, ...[b]} = obj`

<details>
<summary>Answer</summary>
A and B

(It is considered to be correct only if both were selected.)
</details>

###### II-A-3 [Rating]: To what extent do you suggest the usage as shown in the previous question? (Pattern S2)

0---5

##### Part B: Import/Export Declaration in Aggregating Module (Feature SM-1AB)

###### II-B-1 [Single Choice]: Have you known and used `export xxx from 'xxx'` to export symbols from other files in a package entry (like `index.js`)?

A. Known and used

B. Known but not used

C. Neither known nor used

###### II-B-2 [Single Choice]: The syntax `export xxx from 'xxx'` is called re-export, does this statement make the symbol `xxx` reference-able in the current file?

A. Yes, you can reference `xxx` in the current file if it was re-exported.

B. No, the re-export syntax only makes `xxx` available to other files that import the current file.

<details>
<summary>Answers</summary>
B
</details>

###### II-B-3 [Rating]: To what extent do you RESIST in the use of `export xxx from 'xxx'` and keep the separated export and import `import xxx from 'xxx'; export xxx;`? (Pattern S4)

0---5

##### Part C: Choice in Primitive Creation (Feature OA-1AB)

###### II-C-1 [Single choice]: Have you known and used function/constructor call to JavaScript primitives like `new String(xxx)`, `Number(xxx)`, `new Object(xxx), etc.?

A. Known and used

B. Known but not used

C. Neither known nor used

###### II-C-2 [Multi Choice]: Consider the differences between a constructor call `new String(xxx)` and a function call `String(xxx)`, which of the following options are correct?

A. The constructor call will return a string wrapper **object**, while the function call will return a string literal. That is, the code `(new) String('Hello World') === 'Hello World'` will return `false` for the constructor call and `true` for the function call.

B. `new BigInt(123)` and `new Symbol('MY_SYMBOL')` are also valid constructor calls.

C. When the function `includes('a')` is called on a string literal `'abc'`, the literal will be first wrapped into a string object, and then the function is called on the object.

<details>
<summary>Answers</summary>
A and C
</details>

###### II-C-3 [Rating]: To what extent do you prefer creating blank objects using `new Object()` over `{ }`?

0---5

#### Section III: Ending Questions

##### III-1 [Rating]: To what extend do you think that these three features covered in this questionnaire are corner cases (features are rarely used in practice)? The bigger the rating, the more you agree with the corner case.

0---5

##### III-2 [Rating]: Your rating to the whole questionnaire? The bigger the rating, the more active you think you learned something; the lower the rating, the fewer value you consider.

0---5

##### III-3 [Text]: Any comments or suggestions on this questionnaire.

(Any text input)

### Survey Results

> [!NOTE]
> This survey was conducted within a company, and restricted by the privacy policy, we can not provide the raw data. But we can provide the summarized results and analysis.

#### Metadata

| Item | Value |
| --- | --- |
| Survey Participants | 30 |
| Survey Completion Rate | 100% |
| Familiarity to JavaScript and TypeScript | Normal (19), Familiar (11) |
| Development Domain | Frontend (18), Backend (12), Library (10), Others (6) |
| Rating to the extent of feature corner cases | 3.4/5 |
| Rating to the questionnaire | 2.6/5 |

#### Feature Usages

| Question: Feature | Feature Awareness | Used Feature Before | Fact Question Correctness (Normal Dev) | Fact Question Correctness (Familiar Dev) | Pattern Rating |
| --- | --- | --- | --- | --- | --- |
| I: SD-1A | 25 | 20 | 2 | 1 | 1.2/5 |
| II: SM-1AB | 26 | 17 | 10 | 11 | 2.0/5 |
| III: OA-1AB | 21 | 14 | 2 | 6 | 1.8/5 |

#### Observations

First, developers exhibit low accuracy on subtle feature details. On what destructuring patterns are allowed to nest and difference between constructor call and function call in creating primitives, less than 30\% of developers can correctly select the true answer, and there is no significant difference between senior developers and expert developers, even if some declared to be familiar with the language specification.

However, intuitively, they all agreed with our judgment on the negative impact of these potential code smell patterns (ratings were all below 2.0).