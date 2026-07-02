import os
import sys
from pathlib import Path

# Add the backend directory path explicitly so Django can locate your settings
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()

# This is the reference handler for Vercel
app = application