'use client';
import { useState, type FormEvent } from 'react';
import { site, whatsappUrl } from '@/lib/site';
export function ArabicContact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || '').trim();
    const nextErrors: Record<string, string> = {};
    if (value('name').length < 2) nextErrors.name = 'يرجى كتابة اسمك بحرفين على الأقل.';
    const digits = value('phone').replace(/\D/g, '');
    if (digits.length < 9 || digits.length > 15) nextErrors.phone = 'يرجى إدخال رقم صحيح مع رمز الدولة.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) nextErrors.email = 'يرجى إدخال بريد إلكتروني صحيح.';
    if (!value('type')) nextErrors.type = 'يرجى اختيار نوع المشروع.';
    if (!value('budget')) nextErrors.budget = 'يرجى اختيار الميزانية والعملة.';
    if (value('message').length < 10) nextErrors.message = 'يرجى وصف مشروعك بعشرة أحرف على الأقل.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setPrepared('');
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    setPrepared(whatsappUrl(`مرحباً ShineoraTech 👋\nأرغب في مناقشة مشروعي الرقمي.\n\nالاسم: ${value('name')}\nالشركة: ${value('company') || 'غير محددة'}\nالهاتف: ${value('phone')}\nالبريد: ${value('email')}\nالمشروع: ${value('type')}\nالميزانية: ${value('budget')}\n\n${value('message')}`));
  }
  function field(name: string, label: string, type = 'text', required = true, placeholder = '') {
    return <div className="form-field"><label htmlFor={`ar-${name}`}>{label}{required ? ' *' : ''}</label><input id={`ar-${name}`} name={name} type={type} required={required} placeholder={placeholder} maxLength={160} autoComplete={name === 'name' ? 'name' : name === 'company' ? 'organization' : name === 'phone' ? 'tel' : 'email'} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `ar-${name}-error` : undefined} />{errors[name] && <span id={`ar-${name}-error`} className="field-error">{errors[name]}</span>}</div>;
  }
  return <section className="section contact arabic-contact" id="contact"><div className="container contact-layout"><div><p className="eyebrow">لنتحدث عن مشروعك</p><h2>خطوتك القادمة<br /><span className="accent">تبدأ هنا.</span></h2><p className="contact-intro">أخبرنا عن نشاطك وأهدافك في السعودية أو الكويت أو دول الخليج. نساعدك على تحديد الحل المناسب والتعاون عن بُعد.</p><a className="contact-whatsapp" href={whatsappUrl('مرحباً ShineoraTech، أود مناقشة مشروعي.')} target="_blank" rel="noopener noreferrer"><div><small>تفضل التواصل مباشرة؟</small><strong>راسلنا على واتساب</strong><bdi dir="ltr">{site.phone}</bdi></div></a><a className="contact-email" href={`mailto:${site.email}`}><span>البريد الإلكتروني</span><strong><bdi>{site.email}</bdi></strong></a><div className="contact-points"><p>✓ تعارف أولي دون التزام</p><p>✓ عرض يناسب احتياجاتك</p><p>✓ متابعة في كل مرحلة</p></div></div><form onSubmit={submit} noValidate onChange={() => setPrepared('')}><div className="form-top"><span>حدثنا عن مشروعك</span><small>* حقول مطلوبة</small></div><div className="form-grid">{field('name', 'الاسم', 'text', true, 'اسمك')}{field('company', 'الشركة', 'text', false, 'اسم الشركة')}{field('phone', 'الهاتف / واتساب', 'tel', true, '+966… / +965…')}{field('email', 'البريد الإلكتروني', 'email', true, 'name@company.com')}{[['type', 'نوع المشروع', ['موقع تعريفي', 'متجر إلكتروني', 'تطبيق ويب', 'إعادة تصميم', 'مشروع آخر']], ['budget', 'الميزانية والعملة', ['أقل من 5,000 ريال سعودي', '5,000–15,000 ريال سعودي', 'أكثر من 15,000 ريال سعودي', 'أقل من 500 دينار كويتي', '500–1,500 دينار كويتي', 'أكثر من 1,500 دينار كويتي', 'عملة أخرى / نحددها معاً']]].map(([name, label, options]) => <div className="form-field" key={name as string}><label htmlFor={`ar-${name}`}>{label as string} *</label><select id={`ar-${name}`} name={name as string} required defaultValue="" aria-invalid={!!errors[name as string]} aria-describedby={errors[name as string] ? `ar-${name}-error` : undefined}><option value="" disabled>اختر من القائمة</option>{(options as string[]).map(option => <option key={option}>{option}</option>)}</select>{errors[name as string] && <span className="field-error" id={`ar-${name}-error`}>{errors[name as string]}</span>}</div>)}<div className="form-field full"><label htmlFor="ar-message">رسالتك *</label><textarea id="ar-message" name="message" rows={4} required minLength={10} maxLength={1500} placeholder="نشاطك وأفكارك وما الذي ترغب في تطويره…" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'ar-message-error' : undefined} />{errors.message && <span className="field-error" id="ar-message-error">{errors.message}</span>}</div></div><p className="form-notice">سنجهز طلبك كرسالة واتساب. يمكنك مراجعتها وتأكيد إرسالها داخل واتساب.</p><button className="button form-submit" type="submit">تجهيز طلب عرض السعر</button>{Object.keys(errors).length > 0 && <p role="alert" className="form-error">يرجى مراجعة الحقول المحددة قبل المتابعة.</p>}{prepared && <div className="form-success" role="status"><div><strong>طلبك جاهز للمراجعة.</strong><p>لم يتم إرساله بعد. افتح واتساب ثم أكد إرسال الرسالة.</p><a className="button" href={prepared} target="_blank" rel="noopener noreferrer">المتابعة على واتساب</a></div></div>}<p className="privacy-note">لا يحفظ هذا النموذج بياناتك. تنتقل المعلومات إلى واتساب فقط عندما تختار المتابعة.</p></form></div></section>;
}
