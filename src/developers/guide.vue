<template>
  <section class="developers-header">
    <div class="min-h-screen md:flex">
      <div class="flex-none w-full md:w-64">
        <strong>Navigation</strong><br /><br />
        <a href="#getting-started" class="text-blue hover:text-blue-darker">Getting started</a><br />
        <a href="#auth" class="text-blue hover:text-blue-darker">Auth</a><br />
        <a href="#deployment" class="text-blue hover:text-blue-darker">Deployment</a><br />
      </div>
      <div class="flex-1">
        <guideIntroduction />
        <br />
        <guideGettingStarted />
        <br />
        <guideAuth />
        <br />
        <guideDeployment />
      </div>
    </div>
  </section>
</template>

<script>
import GuideIntroduction from 'components/guide/guideIntroduction';
import GuideGettingStarted from 'components/guide/guideGettingStarted';
import GuideAuth from 'components/guide/guideAuth';
import GuideDeployment from 'components/guide/guideDeployment';
export default {
  name: 'guide',
  components: {
    [GuideIntroduction.name]: GuideIntroduction,
    [GuideGettingStarted.name]: GuideGettingStarted,
    [GuideAuth.name]: GuideAuth,
    [GuideDeployment.name]: GuideDeployment
  }
};
</script>
