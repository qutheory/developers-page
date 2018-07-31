<template>
    <div>
      <h2 id="deployment">Deployment</h2>
      <br />
      Deployment is actions that interact with the application in the cluster, a deployment can have various different types

      <br /><br />

      <ul style="margin:0px; padding-left:20px;">
        <li><strong>replica:</strong> Manage replicas like code, scale, resize etc.</li>
        <li><strong>redis:</strong> Manage Redis servers</li>
        <li><strong>database:</strong> Manage Database servers</li>
      </ul>

      <br />

      In most cases you won't interact directly with the deploy API, instead you will call a command to e.g. modify config variables.
      This will return a deployment object containing an ID. You can then listen to the websocket, with the ID to get log output.

      <br /><br />

      When listening to the websocket, you need to set the same auth token, to be authorized to listen to it.
    </div>
</template>

<script>
export default {
  name: 'guideDeployment'
}
</script>
