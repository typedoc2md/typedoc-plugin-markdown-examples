import{_ as e,c as t,o as a,a2 as s}from"./chunks/framework.CQ12TVIp.js";const k=JSON.parse('{"title":"ProductInventory","description":"","frontmatter":{},"headers":[],"relativePath":"api/products/classes/ProductInventory.md","filePath":"api/products/classes/ProductInventory.md"}'),r={name:"api/products/classes/ProductInventory.md"},o=s('<p><a href="./../../">typedoc-vitepress-theme-example</a> / <a href="./../">products</a> / ProductInventory</p><h1 id="productinventory" tabindex="-1">ProductInventory <a class="header-anchor" href="#productinventory" aria-label="Permalink to &quot;ProductInventory&quot;">​</a></h1><p>Class representing a product inventory.</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-productinventory" tabindex="-1">new ProductInventory() <a class="header-anchor" href="#new-productinventory" aria-label="Permalink to &quot;new ProductInventory()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProductInventory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): ProductInventory</span></span></code></pre></div><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./ProductInventory.html"><code>ProductInventory</code></a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="products" tabindex="-1">products <a class="header-anchor" href="#products" aria-label="Permalink to &quot;products&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">private </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">products</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ProductDetails[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addproduct" tabindex="-1">addProduct() <a class="header-anchor" href="#addproduct" aria-label="Permalink to &quot;addProduct()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addProduct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(product): ProductDetails</span></span></code></pre></div><p>Add a new product to the inventory.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>product</strong>: <a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a></p><p>The product to be added.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a></p><p>The added product details.</p><hr><h3 id="getallproducts" tabindex="-1">getAllProducts() <a class="header-anchor" href="#getallproducts" aria-label="Permalink to &quot;getAllProducts()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAllProducts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): ProductDetails[]</span></span></code></pre></div><p>Get all products in the inventory.</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a>[]</p><p>An array of all product details.</p><hr><h3 id="getproductbyid" tabindex="-1">getProductById() <a class="header-anchor" href="#getproductbyid" aria-label="Permalink to &quot;getProductById()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProductById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(productId): ProductDetails</span></span></code></pre></div><p>Get product details by ID.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>productId</strong>: <code>string</code></p><p>The ID of the product.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a></p><p>The product details with the specified ID.</p><hr><h3 id="getproductsbycategory" tabindex="-1">getProductsByCategory() <a class="header-anchor" href="#getproductsbycategory" aria-label="Permalink to &quot;getProductsByCategory()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getProductsByCategory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(category): ProductDetails[]</span></span></code></pre></div><p>Get products by category.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>category</strong>: <a href="./../enumerations/ProductCategory.html"><code>ProductCategory</code></a></p><p>The product category.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a>[]</p><p>An array of product details in the specified category.</p><hr><h3 id="removeproduct" tabindex="-1">removeProduct() <a class="header-anchor" href="#removeproduct" aria-label="Permalink to &quot;removeProduct()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeProduct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(productId): ProductDetails</span></span></code></pre></div><p>Remove a product from the inventory.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>productId</strong>: <code>string</code></p><p>The ID of the product to be removed.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a></p><p>The removed product details.</p><hr><h3 id="updateproductdetails" tabindex="-1">updateProductDetails() <a class="header-anchor" href="#updateproductdetails" aria-label="Permalink to &quot;updateProductDetails()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateProductDetails</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(productId, updatedDetails): ProductDetails</span></span></code></pre></div><p>Update product details.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>productId</strong>: <code>string</code></p><p>The ID of the product to be updated.</p><p>• <strong>updatedDetails</strong>: <a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a></p><p>The updated product details.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/ProductDetails.html"><code>ProductDetails</code></a></p><p>The updated product details.</p>',70),i=[o];function d(n,c,p,h,l,u){return a(),t("div",null,i)}const P=e(r,[["render",d]]);export{k as __pageData,P as default};
