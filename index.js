export default {
    ra: {
        action: {
            add_filter: 'הוסף סינון',
            add: 'הוסף',
            back: 'חזור',
            bulk_actions: 'פריט אחד נבחר |||| %{smart_count} פריטים נבחרו',
            cancel: 'ביטול',
            clear_input_value: 'נקה ערך',
            clone: 'שכפל',
            confirm: 'אשר',
            create: 'צור',
            edit: 'ערוך',
            delete: 'מחק',
            edit: 'ערוך',
            export: 'ייצא',
            list: 'רשימה',
            refresh: 'רענן',
            remove_filter: 'הסר סינון',
            remove: 'מחק',
            save: 'שמור',
            search: 'חפש',
            show: 'הצג',
            sort: 'מיין',
            undo: 'בטל',
        },
        boolean: {
            true: 'כן',
            false: 'לא',
        },
        page: {
            create: 'צור %{name}',
            dashboard: 'לוח המחוונים',
            edit: '%{name} #%{id}',
            error: 'שגיאה התרחשה',
            list: 'רשימת %{name}',
            loading: 'טוען',
            not_found: 'לא קיים',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                'גרור מספר קבצים להעלאה או לחץ לבחור אחד.',
                upload_single: 'גרור קובץ להעלאה או לחץ לבחור אחד.',
            },
            image: {
                upload_several:
                'גרור מספר תמונות להעלאה או לחץ לבחור אחת.',
                upload_single:
                'גרור תמונה להעלאה או לחץ לבחור אחת.',
            },
            references: {
                all_missing: 'ישויות הקשר לא נמצאו.',
                many_missing:
                'לפחות אחת מישויות הקשר אינה זמינה יותר.',
                single_missing:
                'ישות הקשר אינה זמינה יותר.',
            },
        },
        message: {
            about: 'אודות',
            are_you_sure: 'האם את/ה בטוח/ה ?',
            bulk_delete_content:
            'האם אתה בטוח שברצונך למחוק %{name}? |||| האם אתה בטוח שברצונך למחוק %{smart_count} פריטים?',
            bulk_delete_title:
            'מחק %{name} |||| מחק %{smart_count} %{name} פריטים',
            delete_content: 'האם אתה בטוח שברצונך למחוק את הפריט הזה?',
            delete_title: 'מחק %{name} #%{id}',
            details: 'פרטים',
            error:
            'קרתה שגיאת תקשורת והבקשה שלך לא הסתיימה.',
            invalid_form: 'הטופס אינו תקין. אנא תקן את שגיאותיך',
            loading: 'העמוד טוען, אנא המתן',
            no: 'לא',
            yes: 'כן',
            not_found:
            'הכנסת כתובת שגויה או לחצת על קישור לא תקין',
        },
        navigation: {
            no_results: 'לא נמצאו תוצאות',
            no_more_results:
'עמוד %{page} מחוץ לתחום. אנא נסה את העמוד הקודם.',
            page_out_of_boundaries: 'עמוד %{page} מחוץ לתחום',
            page_out_from_end: 'לא ניתן להמשיך מעבר לעמוד האחרון',
            page_out_from_begin: 'לא ניתן לגשת לפני העמוד הראשון',
            page_range_info: '%{offsetBegin}-%{offsetEnd} מתוך %{total}',
            page_rows_per_page: 'מספר שורות לעמוד:',
            next: 'הבא',
            prev: 'הקודם',
        },
        auth: {
            user_menu: 'פרופיל',
            username: 'שם משתמש',
            password: 'סיסמא',
            sign_in: 'כניסה',
            sign_in_error: 'הכניסה נכשלה, אנא נסו שנית',
            logout: 'התנתקות',
        },
        notification: {
            updated: 'פריט עודכן בהצלחה',
            created: 'פריט נוצר בהצלחה',
            deleted: 'פריט נמחק בהצלחה',
            bad_item: 'פריט לא תקין',
            item_doesnt_exist: 'פריט לא קיים',
            http_error: 'שגיאה בהתקשרות מול השרת',
            data_provider_error:
            'שגיאת dataProvider. בדוק את הקונסול לפרטים נוספים.',
            canceled: 'הפעולה בוטלה',
            logged_out: 'הנך מנותק, אנא התחבר מחדש.',
        },
        validation: {
            required: 'חובה',
            minLength: 'חייב להכיל לפחות %{min} תווים',
            maxLength: 'יכול להכיל לכל היותר %{max} תווים',
            minValue: 'חייב להיות לפחות %{min}',
            maxValue: 'חייב להיות %{max} או פחות',
            number: 'חייב להיות מספר',
            email: 'כתובת דוא"ל לא תקנית',
            oneOf: 'חייב להיות מאחת האפשרויות הבאות: %{options}',
            regex: 'חייב להתאים לתבנית ספציפית (ביטוי רגולרי): %{pattern}',
        },
    },
};
