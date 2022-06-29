## Core Folder

The core layer is where we place everything unrelated to our domain, such as utilities, technical implementations, or API.

For example:

    the functions that connect to your database
    the utilities that you use to authenticate users
    the provider to send emails
    the reusable UI components not related to any domain (ex. Dropdown, Button, TextInput)
    and more.
    
The core layer provides the domain with the necessary tools for the application to work, for example, authenticating, querying the DB, or sending emails. But does not know how the consumer uses these tools.