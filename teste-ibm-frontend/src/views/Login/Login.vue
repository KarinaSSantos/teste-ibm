<template>
  <div>
    <div>Login Page</div>
    <div class="Page Page-Login">
      <div class="Container">
        <h1>Já possuí conta?</h1>
        <p>Acesse com as redes sociais:</p>
        <!-- //aqui vão os buttons de social midia -->
        <div class="Form-Login">
          <div class="Form-Login-SocialAuth">
            <div class="SocialAuth_Block">
              <div class="Button Primary Solid">
                <a
                  style="display: block"
                  href="http://localhost:8080/auth/google/"
                  >Google</a>
              </div>
            </div>
            <a style="display: block" href="http://localhost:8080/auth/twitter/"
              >Twitter</a
            >
            <a
              style="display: block"
              href="http://localhost:8080/auth/linkedin/"
              >Linkedin</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>