import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOrder } from "../context/OrderContext";
import { FiCheck, FiMapPin, FiPhone, FiX } from "react-icons/fi";

const WHATSAPP_NUMBER = "9647700000000";

export default function OrderDrawer() {
  const { isOpen, item, closeOrder } = useOrder();
  const [qty, setQty] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const handleClose = () => {
    closeOrder();
    setTimeout(() => {
      setQty(1);
      setConfirmed(false);
    }, 300);
  };

  const handleConfirm = () => {
    if (!item) return;
    setConfirmed(true);
    const message = encodeURIComponent(
      `مرحباً معلم الشاورما 👋\nأريد طلب: ${item.name}\nالكمية: ${qty}\nالسعر التقريبي: ${item.price} د.ع\nشكراً لكم 🙏`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 bottom-0 right-0 z-[95] w-full max-w-md border-l border-gold-400/30 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-900 p-6 shadow-2xl shadow-black"
          >
            <div className="flex items-center justify-between border-b border-gold-400/20 pb-4">
              <h3 className="font-display text-2xl text-gold-gradient">طلبك السريع</h3>
              <button
                onClick={handleClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/30 text-gold-200 transition hover:bg-gold-400/10"
              >
                <FiX size={18} />
              </button>
            </div>

            {!confirmed ? (
              <div className="mt-8 flex flex-col gap-6">
                <div className="rounded-2xl border border-gold-400/20 bg-white/5 p-5">
                  <p className="text-sm text-gold-200/70">الصنف المختار</p>
                  <h4 className="mt-1 font-display text-3xl text-gold-100">{item.name}</h4>
                  <p className="mt-2 text-lg font-bold text-ember-500">
                    {item.price} <span className="text-sm text-gold-200/60">د.ع</span>
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-sm text-gold-200/70">الكمية</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-gold-400/30 text-xl text-gold-200 transition hover:bg-gold-400/10 active:scale-95"
                    >
                      −
                    </button>
                    <span className="min-w-[2ch] text-center font-display text-2xl text-gold-100">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-gold-400/30 text-xl text-gold-200 transition hover:bg-gold-400/10 active:scale-95"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-gold-400/20 bg-white/5 p-5 text-sm text-gold-200/70">
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-gold-400" /> استلام من الفرع أو توصيل خلال 30 دقيقة
                  </div>
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-gold-400" /> تأكيد الطلب مباشرة عبر واتساب
                  </div>
                </div>

                <button
                  onClick={handleConfirm}
                  className="group relative mt-2 overflow-hidden rounded-2xl bg-gradient-to-l from-ember-600 via-ember-500 to-gold-500 py-4 text-center font-display text-xl text-white shadow-lg shadow-ember-700/40 transition active:scale-[0.98]"
                >
                  <span className="relative z-10">تأكيد الطلب بضغطة واحدة 🔥</span>
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-16 flex flex-col items-center gap-5 text-center"
              >
                <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-ember-600 text-white shadow-lg animate-pulse-glow">
                  <FiCheck size={36} />
                </div>
                <h4 className="font-display text-2xl text-gold-100">وصلنا طلبك يا غالي!</h4>
                <p className="max-w-xs text-sm leading-7 text-gold-200/70">
                  حياك الله، فريقنا بانتظار رسالتك على واتساب لتأكيد التفاصيل وتجهيز طلبك بأسرع وقت.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 rounded-xl border border-gold-400/40 px-6 py-2.5 text-gold-200 transition hover:bg-gold-400/10"
                >
                  إغلاق
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
