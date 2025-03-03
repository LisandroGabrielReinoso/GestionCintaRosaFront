import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormValueLogin } from '../interfaces/FormValues';
import { login } from '../api/methods/users';
import { successNotification, errorNotification } from '../utils/notifications';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {login: setAuth} = useAuth();
    const navigate = useNavigate();

    // A ver carnero, esto lo que hace es definir los valores iniciales del form.
    const initialValues: FormValueLogin={
        email:'',
        password:''
    }
    // Aqui hacemos las validaciones requeridas del form.
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
    });
    //Este es un manejador que nos ayuda a subir los datos del form.
    const handleSubmit = async (values: FormValueLogin, { setSubmitting }: any) => {
        const response = await login(values);
        if (response?.success) {
            setAuth();
            successNotification(response.message || "Inicio de sesión exitoso.");
            navigate('/home')
        } else {
            errorNotification(response?.message || "Error al iniciar sesión.");
        }
        setSubmitting(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <Field type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                                <Field type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400">
                                {isSubmitting ? "Cargando..." : "Ingresar"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login