Typed contracts
===

###### Created by Shukhrat Mukimov ( [@mufasa71](https://github.com/mufasa71) )

---

Typed Contract Features
===

# ![](images/from_validate.png)

- Runtime type checking
- Contracts are a 100% guarantee that the data pass validation
- Generate type from validate with $Call :heart:

---

# How it works?

First we define contract:

```js
const contract = t.object({
  name: t.string,
  gender: t.union('m', 'f'),
})
```
Contracts can be chainable:
```js
name: t.string.optional
```
Generate flow type based on contract with `$Call`:

---

# How we can use it with flow
> `$Call<F>` is a type that represents the result of calling the given function type F. This happens on static time, not run time.
```
type Result = $Call<contract, mixed>
```
---
