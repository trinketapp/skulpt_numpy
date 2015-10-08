function createRkState(n,r,e,t,a,i,l,u,_,s,o,k,S,f,c,m,d,h,b){return{key:n||new Array(RK_STATE_LEN),pos:r||null,gauss:null,has_gauss:e||null,has_binominal:t||null,psave:a||null,nsave:i||null,r:l||null,q:u||null,fm:_||null,m:s||null,p1:o||null,xm:k||null,xl:S||null,xr:f||null,laml:c||null,lamr:m||null,p2:d||null,p3:h||null,p4:b||null}}function rk_hash(n){return rk_hash_uint[0]=0|n,rk_hash_uint[0]+=~(rk_hash_uint[0]<<15),rk_hash_uint[0]^=rk_hash_uint[0]>>>10,rk_hash_uint[0]+=rk_hash_uint[0]<<3,rk_hash_uint[0]^=rk_hash_uint[0]>>>6,rk_hash_uint[0]+=~(rk_hash_uint[0]<<11),rk_hash_uint[0]^=rk_hash_uint[0]>>>16,rk_hash_uint[0]>>>0}function rk_seed(n,r){var e,t;for(r.key[0]=n>>>0,e=1;RK_STATE_LEN>e;e++)t=r.key[e-1]^r.key[e-1]>>>30,r.key[e]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+e,r.key[e]>>>=0;r.pos=RK_STATE_LEN,r.gauss=0,r.has_gauss=0,r.has_binomial=0}function rk_randomseed(n){var r,e;if(rk_devfill(n.key,4,0)===rk_error.RK_NOERR){for(n.key[0]|=2147483648,n.pos=RK_STATE_LEN,n.gauss=0,n.has_gauss=0,n.has_binomial=0,r=0;624>r;r++)n.key[r]&=4294967295;return rk_error.RK_NOERR}return e=new Date,rk_seed(rk_hash(e.getTime())^rk_hash(e.getMilliseconds()),n),rk_error.RK_ENODEV}function rk_random(n){var r;if(n.pos===RK_STATE_LEN){var e;for(e=0;N-M>e;e++)r=n.key[e]&UPPER_MASK|n.key[e+1]&LOWER_MASK,n.key[e]=n.key[e+M]^r>>>1^-(1&r)&MATRIX_A;for(;N-1>e;e++)r=n.key[e]&UPPER_MASK|n.key[e+1]&LOWER_MASK,n.key[e]=n.key[e+(M-N)]^r>>>1^-(1&r)&MATRIX_A;r=n.key[N-1]&UPPER_MASK|n.key[0]&LOWER_MASK,n.key[N-1]=n.key[M-1]^r>>>1^-(1&r)&MATRIX_A,n.pos=0}return r=n.key[n.pos++],r^=r>>>11,r^=r<<7&2636928640,r^=r<<15&4022730752,r^=r>>>18,r>>>0}function rk_ulong(n){return rk_random(n)}function rk_long(n){return rk_ulong(n)>>>1}function rk_interval(n,r){var e,t=n;if(0===n)return 0;if(t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,4294967295>=n)for(;(e=rk_random(r)&t)>n;);else for(;(e=rk_ulong(r)&t)>n;);return e}function rk_double(n){var r=rk_random(n)>>>5,e=rk_random(n)>>>6;return(67108864*r+e)*(1/9007199254740992)}function rk_fill(n,r,e){for(var t,a=new Int32Array(n),i=0;r>=4;r-=4)t=rk_random(e),a[i++]=255&t,a[i++]=t>>>8&255,a[i++]=t>>>16&255,a[i++]=t>>>24&255;if(r)for(t=rk_random(e);r;t>>>=8,r--)a[i++]=255&t}function rk_devfill(n,r,e){return rk_error.RK_ENODEV}function rk_altfill(n,r,e,t){var a;return a=rk_devfill(n,r,e),a&&rk_fill(n,r,t),a}function rk_gauss(n){if(n.has_gauss){var r=n.gauss;return n.gauss=0,n.has_gauss=0,r}var e,t,a,i;do t=2*rk_double(n)-1,a=2*rk_double(n)-1,i=t*t+a*a;while(i>=1||0===i);return e=Math.sqrt(-2*Math.log(i)/i),n.gauss=e*t,n.has_gauss=1,e*a}function init_genrand(n,r){var e,t=n.key;for(t[0]=4294967295&r,e=1;RK_STATE_LEN>e;e++)t[e]=1812433253*(t[e-1]^t[e-1]>>>30)+e,t[e]&=4294967295;n.pos=e}function init_by_array(n,r,e){var t,a=1,i=0,l=n.key;for(init_genrand(n,19650218),t=RK_STATE_LEN>e?RK_STATE_LEN:e;t;t--)l[a]=(l[a]^1664525*(l[a-1]^l[a-1]>>>30))+r[i]+i,l[a]&=4294967295,a++,i++,a>=RK_STATE_LEN&&(l[0]=l[RK_STATE_LEN-1],a=1),i>=e&&(i=0);for(t=RK_STATE_LEN-1;t;t--)l[a]=(l[a]^1566083941*(l[a-1]^l[a-1]>>>30))-a,l[a]&=4294967295,a++,a>=RK_STATE_LEN&&(l[0]=l[RK_STATE_LEN-1],a=1);l[0]=2147483648,n.gauss=0,n.has_gauss=0,n.has_binomial=0}function cont0_array(n,r,e,t){var a,i,l,u;if(Sk.builtin.checkNone(e))return new Sk.builtin.float_(r.call(null,n));for(i=Sk.misceval.callsim(np.$d.empty,e,Sk.builtin.float_),l=i.v.buffer.length,a=i.v.buffer,u=0;l>u;u++)a[u]=new Sk.builtin.float_(r.call(null,n));return i}function cont1_array_sc(n,r,e,t,a){}var RK_STATE_LEN=624,rk_error={RK_NOERR:"RK_NOERR",RK_ENODEV:"RK_ENODEV",RK_ERR_MAX:"RK_ERR_MAX"},rk_strerror=["no error","random device unavailable"],RK_MAX=4294967296,rk_hash_uint;rk_hash_uint=void 0===typeof Uint32Array?[0]:new Uint32Array(1);var N=624,M=397,MATRIX_A=2567483615,UPPER_MASK=2147483648,LOWER_MASK=2147483647,rk_state={key:[],pos:null,has_gauss:null,gauss:null},np=Sk.importModule("numpy"),CLASS_RANDOMSTATE="RandomState",$builtinmodule=function(n){var r={},e=function(n,r){var e=function(n,r){null==r&&(r=Sk.builtin.none.none$),n.internal_state=createRkState(),n.poisson_lam_max=new Sk.builtin.int_(Math.pow(2,53)-1),n.lock=null,Sk.misceval.callsim(n.seed,n,r)};e.co_varnames=["self","seed"],e.$defaults=[Sk.builtin.none.none$],r.__init__=new Sk.builtin.func(e),r.seed=new Sk.builtin.func(function(n,r){null==r&&(r=Sk.builtin.none.none$);var e,t;try{if(Sk.builtin.checkNone(r))e=rk_randomseed(n.internal_state);else{var a=new Sk.builtin.int_(Sk.misceval.asIndex(r)),i=Sk.ffi.remapToJs(a);if(i>Math.pow(2,32)-1||0>i)throw new Sk.builtin.ValueError("Seed must be between 0 and 4294967295");rk_seed(i,n.internal_state)}}catch(l){if(!(l instanceof Sk.builtin.TypeError))throw l;t=Sk.misceval.callsim(np.$d.asarray,r,Sk.builtin.int_),t.v.buffer.map(function(n){if(n>Math.pow(2,32)-1||0>n)throw new Sk.builtin.ValueError("Seed must be between 0 and 4294967295")}),init_by_array(n.internal_state,t.v.buffer,t.v.shape[0])}}),r.set_state=new Sk.builtin.func(function(n){}),r.get_state=new Sk.builtin.func(function(n){var r=n.internal_state.key.map(function(n){return new Sk.builtin.int_(n)}),e=obj=Sk.misceval.callsim(np.$d.asarray,new Sk.builtin.tuple(r),Sk.builtin.int_),t=new Sk.builtin.int_(n.internal_state.has_gauss),a=new Sk.builtin.float_(n.internal_state.gauss),i=new Sk.builtin.int_(n.internal_state.pos);return new Sk.builtin.tuple([new Sk.builtin.str("MT19937"),e,i,t,a])});var t=function(n,r){null==r&&(r=Sk.builtin.none.none$);var e=cont0_array(n.internal_state,rk_double,r,n.lock);return e};t.co_varnames=["self","size"],t.$defaults=[Sk.builtin.none.none$],r.random_sample=new Sk.builtin.func(t);var a=function(n,r){throw new NotImplementedError("RandomState.tomaxint")};a.co_varnames=["self","size"],a.$defaults=[Sk.builtin.none.none$],r.tomaxint=new Sk.builtin.func(a);var i=function(n,r,e,t){throw new NotImplementedError("RandomState.randint")};i.co_varnames=["self","low","high","size"],i.$defaults=[null,Sk.builtin.none.none$,Sk.builtin.none.none$],r.randint=new Sk.builtin.func(i),r.rand=new Sk.builtin.func(function(n){return args=new Sk.builtins.tuple(Array.prototype.slice.call(arguments,1)),0===args.v.length?Sk.misceval.callsim(n.random_sample,n):Sk.misceval.callsim(n.random_sample,n,args)});var l=function(n,r){throw new NotImplementedError("RandomState.bytes")};r.bytes=new Sk.builtin.func(l);var u=function(n,r){throw new NotImplementedError("RandomState.choice")};r.choice=new Sk.builtin.func(u);var _=function(n,r){throw new NotImplementedError("RandomState.uniform")};r.uniform=new Sk.builtin.func(_),r.randn=new Sk.builtin.func(function(n){return args=new Sk.builtins.tuple(Array.prototype.slice.call(arguments,1)),0===args.v.length?Sk.misceval.callsim(n.standard_normal,n):Sk.misceval.callsim(n.standard_normal,n,args)}),r.tp$getattr=Sk.builtin.object.prototype.GenericGetAttr,r.tp$setattr=Sk.builtin.object.prototype.GenericSetAttr};return r[CLASS_RANDOMSTATE]=Sk.misceval.buildClass(r,e,CLASS_RANDOMSTATE,[]),r._rand=Sk.misceval.callsim(r[CLASS_RANDOMSTATE]),r.rand=Sk.abstr.gattr(r._rand,"rand",!0),r.seed=Sk.abstr.gattr(r._rand,"seed",!0),r.random_sample=Sk.abstr.gattr(r._rand,"random_sample",!0),r.random=r.random_sample,r.sample=r.random_sample,r};