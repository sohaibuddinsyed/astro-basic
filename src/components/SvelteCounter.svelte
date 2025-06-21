<script>
  let count = 0;
  
  function increment() {
    console.log(`Incrementing counter to ${count + 1} - Executing in browser`)
    count += 1;
  }
  
  function decrement() {
    console.log(`Decrementing counter to ${count - 1} - Executing in browser`)
    count -= 1;
  }
</script>

<div class="svelte-counter">
  <h3>Svelte Counter Component</h3>
  <p>This is a Svelte component with client-side interactivity. JS is downloaded as a static resource 
        and executed in the browser, see console log.</p>
  <p>Count: {count}</p>
  <button on:click={increment} class="increment-btn">
    Increment
  </button>
  <button on:click={decrement} class="decrement-btn">
    Decrement
  </button>
</div>

<style>
  .svelte-counter {
    padding: 20px;
    border: 2px solid #ff3e00;
    border-radius: 8px;
    background-color: #fff5f5;
  }
  
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 8px;
  }
  
  .increment-btn {
    background-color: #ff3e00;
    color: white;
  }
  
  .decrement-btn {
    background-color: #ff6b6b;
    color: white;
  }
  
  button:hover {
    opacity: 0.8;
  }
</style>
