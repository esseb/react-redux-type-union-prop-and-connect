# Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `npm run tsc`

# Expected result

These component usages should fail:

- `<UnconnectedPerson type="name">`
- `<UnconnectedPerson type="nickname">`
- `<ConnectedPerson type="name">`
- `<ConnectedPerson type="nickname">`

# Actual result

These component usages fail:

- `<UnconnectedPerson type="name">`
- `<UnconnectedPerson type="nickname">`
- `<ConnectedPerson type="name" name="Foo Bar">`
- `<ConnectedPerson type="nickname" nickname="baz">`
