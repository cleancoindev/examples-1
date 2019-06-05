// We will modify the code within the run function
const run = async () => {
  // Initialize cargo using the development network. This will fetch Cargo contract information
  // so we can begin interacting with those contracts when we are ready.
  await cargo.init({
    network: 'development',
  });

  // In order to interact with cargo contracts we will need to call the enable method.
  // This determines if the user has a provider available that will allow us to connect
  // to the Ethereum blockcain.
  const isEnabled = await cargo.enable();

  showContent(isEnabled);
};

run();

/**
 * UTILITY FUNCTIONS. NO NEED TO MODIFY THESE. MODIFY CODE
 * WITHIN THE RUN FUNCTION
 */

function showContent(isEnabled) {
  const el = document.querySelector(
    `[data-id="provider-${isEnabled ? 'enabled' : 'required'}"]`
  );
  el.classList.remove('hide');
}
