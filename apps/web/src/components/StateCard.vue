<template>
  <div>
    <dl>
      <dt>State</dt>
      <dd>
        <div class="state-card">
          <div class="state-card-content">
            <div class="state-card-state">
              <div class="state-card-state-icon">
                <slot name="icons"></slot>
              </div>
              <div class="state-card-state-label">
                <slot name="infos"></slot>
              </div>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>
