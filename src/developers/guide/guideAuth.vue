<template>
    <div>
      <h2 id="auth">Auth</h2>
      <br />
      When doing authentication, you can't use the login endpoint. This is to make sure to keep passwords etc. safe.
      <br /><br />
      Instead, you should create a user token either from the dashboard or toolbox, and use that to authenticate.
      <br /><br />
      This also have the advantage that there are no expiration on the tokens.
      <br /><br />
      <div class="bg-purple-lightest border border-purple-light text-purple-dark px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Important!</strong>
        <span class="block sm:inline">
          If you think your token have been compromised, make sure to go in and delete the token. This will make it invalid.
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'guideAuth'
}
</script>
