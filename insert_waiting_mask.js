
!function () {




  window.onload = function () {
    // 创建一个新的 label 元素
    const waiting_mask = `<div class="waiting" id="waiting" name="waiting">
    <div class="spinner-container">
        <div class="spinner"></div>
        <p class="loading-text;" style="color: white;margin-top: 20px;text-align: center;">
            数据提交中，请稍候...</p>
    </div></div>`


    // 将 label 添加到 body 中
    document.body.insertAdjacentHTML('beforeend', waiting_mask)}




  }()
