import Layout from "./layouts/Layout";
import Index from "./dashboard/Index";
import UploadBook from "./dashboard/UploadBook";
import BorrowBook from "./dashboard/Borrow";
import Qrcode from "./dashboard/Qrcode";
import auth from "../../router/middleware/auth";

const protectedRoutes = [
    {
        path:'',
        component: Layout,

        children: [
            {
                path:'dashboard',
                component: Index,
                meta:{ middleware: [ auth ]},
            },
            {
                path:'upload-book',
                component: UploadBook,
                meta:{ middleware: [ auth ]}
            },
            {
                path:'borrow-books',
                component: BorrowBook,
                meta:{ middleware: [ auth ]}
            },
            {
                path:'qrcode',
                component: Qrcode,
                meta:{ middleware: [ auth ]}
            },
        ]
    }
]

export default protectedRoutes;